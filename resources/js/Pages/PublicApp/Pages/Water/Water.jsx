import './Water.scss'
import React, { useState } from 'react'

import { useInternalRouting } from '../../Components/InternalRouter/InternalRouter'

import config from '@/Util/config'
import { format, isBefore, compareAsc  } from 'date-fns'
import parseMySqlDate from '@/Util/parseMySqlDate'

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import LoadingSpinner from '@/Components/LoadingSpinner/LoadingSpinner'
import Tooltip from '@/Components/Tooltip/Tooltip'

export default function Water({ children, id, route, ...rest }) {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    React.useEffect(() => {
        setIsLoading(true)
        axios
            .get(route(id, ''))
            .then((result) => {
                setResults(result.data.limits ?? [])
            })
            .finally(() => setIsLoading(false))
    }, [])

    const internalRouting = useInternalRouting()
    React.useEffect(() => {
        internalRouting.setLoading(false)
    }, [])

    const getExtraFishDetail = (row) => {
        let extra = []

        if (row.tidal_category) {
            extra.push(row.tidal_category.name + ' waters')
        }

        if (row.fishing_method) {
            if (
                row.fishing_method.name ===
                'May only be angled by artificial fly or baited barbless hook with a single point'
            ) {
                extra.push('Fly Fishing')
            } else {
                extra.push(row.fishing_method.name)
            }
        }

        return extra
    }

    const fishes = formatResults(results)
        

    function formatResults(results) {
        if (!results.length) {
            return
        }

        const fish = results.reduce((a, v) => {
            const fishName = v?.fish?.name ?? null
            if (!a[fishName]) {
                const entry = {
                    season: null,
                    limits: [],
                }
                a[fishName] = entry
            }

            a[fishName].limits.push(v)
            return a
        }, {})

        Object.keys(fish).forEach((fishName) => {
            fish[fishName].limits = fish[fishName].limits
                .sort((a, b) => {
                    const startComparison = compareAsc(parseMySqlDate(a.season_start), parseMySqlDate(b.season_start));     
                    if (startComparison === 0) {
                        return compareAsc(parseMySqlDate(a.season_end), parseMySqlDate(b.season_end));
                    }
                    return startComparison;
                })
            const season = fish[fishName].limits.reduce((a, v) => {
                if (!a.seasonStart) {
                    a.seasonStart = parseMySqlDate(v.season_start)
                } else {
                    const seasonStart = parseMySqlDate(v.season_start)
                    if (isBefore(seasonStart, a.seasonStart)) {
                        a.seasonStart = seasonStart
                    }
                }
                if (!a.seasonEnd) {
                    a.seasonEnd = parseMySqlDate(v.season_end)
                } else {
                    const seasonEnd = parseMySqlDate(v.season_end)
                    if (!isBefore(seasonEnd, a.seasonEnd)) {
                        a.seasonEnd = seasonEnd
                    }
                }
                return a
            }, {seasonStart: null, seasonEnd: null})
            fish[fishName].season = format(season.seasonStart, config.displayDayMonthShortFormat)
                + ' - ' + format(season.seasonEnd, config.displayDayMonthShortFormat)
        })

        return fish
    }

    const [detailsOpen, setDetailsOpen] = useState({})

    const openDetail = (event) => {
        console.log(event)
        if (event.defaultPrevented) {
            debugger
            return
        }

        const fishName = event.currentTarget.value

        setDetailsOpen((oldDetailsOpen) => {
            const newDetailsOpen = JSON.parse(JSON.stringify(oldDetailsOpen))
            newDetailsOpen[fishName] = !newDetailsOpen?.[fishName]
            return newDetailsOpen
        })

    }

    const renderSeasonDateSpan = (limit) => (
        <>
            <span>{format(parseMySqlDate(limit.season_start), config.displayDayMonthShortFormat)} </span>
            <span>- {format(parseMySqlDate(limit.season_end), config.displayDayMonthShortFormat)}</span>
        </>
    )

    const renderExtraFishDetail = (limit, shortCircuit = false) => {
        let text = ''
        if (shortCircuit || !limit.water_description) {       
            if (limit.fishing_method) {
                if (
                    limit.fishing_method.name ===
                    'May only be angled by artificial fly or baited barbless hook with a single point'
                ) {
                    text = 'Fly Fishing'
                } else {
                    text = limit.fishing_method.name
                }
            }

            if (limit.tidal_category) {
                if (text) {
                    text += ' in '
                }
                text += limit.tidal_category.name + ' waters'
            }
        }

        return text
    }

    const renderWaterStretch = (limit) => {
        const extraDetail = renderExtraFishDetail(limit, true)
        return limit.water_description
            ? (
                <div className="water-description">
                    {extraDetail ? extraDetail + ' ' : limit.water.name + ' '}
                    {limit.water_description}
                </div>
            ) : null
    }

    const renderSizeOrNa = (size) => {
        return size ?? 'N/A'
    }

    const renderNumberOrUnlimited= (number) => {
        if (number === null) {
            return ' - '
        }
        return number
    }

    return (
        <div className="Water">

            <div className="fish-grid">

                <div className="header">
                    <div className="column-header date-range">Season/Restrictions</div>
                    <div className="column-header">Bag Limit</div>
                    <div className="column-header">Min. Size</div>
                    <div className="column-header">Max. Size</div>
                </div>
                
                <div className="body">

                    {isLoading
                        ? <div className="loading-spinner-container"><LoadingSpinner /></div>
                        : Object.keys(fishes ?? {}).map((fishName, index) => (
                            <>
                                <button
                                    onClick={openDetail}
                                    value={fishName}
                                    className={`fish-name ${index % 2 === 0 ? 'even' : 'odd'} ${detailsOpen?.[fishName] ? 'open' : ''}`}
                                >
                                    <div className="fish-season">
                                        <strong>
                                            <div className="open-indicator" />
                                            {fishName}
                                        </strong>
                                        <em>
                                            ({`${fishes[fishName].season}`})
                                        </em>
                                    </div>
                                    <div className="flex">
                                        {fishes[fishName].limits.length > 1 
                                            ? (
                                                <Tooltip message="Some Restrictions">
                                                    <ExclamationTriangleIcon className="alert" />
                                                </Tooltip>
                                            ) : null
                                        }
                                        
                                    </div>
                                    
                                </button>
                                
                                <div className={`limits ${index % 2 === 0 ? 'even' : 'odd'} ${detailsOpen?.[fishName] ? 'open' : ''}`}>
                                    {fishes[fishName].limits.map((limit) => (
                                        <>
                                            <div className="season-exception">
                                                <div className="season-date-span">{renderSeasonDateSpan(limit)}</div>
                                                <div className="exception">{renderExtraFishDetail(limit)}</div>
                                            </div>
                                            <div>{renderNumberOrUnlimited(limit.bag_limit)}</div>
                                            <div>{renderSizeOrNa(limit.minimum_size)}</div>
                                            <div>{renderSizeOrNa(limit.maximum_size)}</div>
                                            {renderWaterStretch(limit)}
                                        </>
                                    ))}
                                </div>
                            </>
                    ))}
                </div>
            </div>
        </div>
    )
}

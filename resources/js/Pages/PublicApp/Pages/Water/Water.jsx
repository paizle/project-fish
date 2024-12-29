import React, { useState } from 'react'
import './Water.scss'

import { useInternalRouting } from '../../Components/InternalRouter/InternalRouter'

import DataTable from '@/Components/DataTable/DataTable'

import config from '@/Util/config'
import { format, isBefore, compareAsc  } from 'date-fns'
import parseMySqlDate from '@/Util/parseMySqlDate'

import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

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

    const renderFishColumn = (row) => {
        const fishName = row.fish.name

        return (
            <>
                {fishName}
                {getExtraFishDetail(row).map((text) => (
                    <span className="extra">({text})</span>
                ))}
            </>
        )
    }

    const test = formatResults(results)
        

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
            fish[fishName].season = format(season.seasonStart, config.displayDayMonthFormat)
                + ' - ' + format(season.seasonEnd, config.displayDayMonthFormat)
        })

        return fish
    }

    const [detailsOpen, setDetailsOpen] = useState({})

    const openDetail = (event) => {
        
        const fishName = event.currentTarget.value

        setDetailsOpen((oldDetailsOpen) => {
            const newDetailsOpen = JSON.parse(JSON.stringify(oldDetailsOpen))
            newDetailsOpen[fishName] = !newDetailsOpen?.[fishName]
            return newDetailsOpen
        })

    }

    const renderSeasonDateSpan = (limit) => {
        let season = format(parseMySqlDate(limit.season_start), config.displayDayMonthFormat)
        season += ' - '
        season += format(parseMySqlDate(limit.season_end), config.displayDayMonthFormat)
        return season
    }

    const renderExtraFishDetail = (limit) => {
        let text = ''
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

        return text
    }

    const renderSizeOrNa = (size) => {
        return size ?? 'N/A'
    }

    return (
        <div className="Water">

            <div className="fish-grid">

                <div className="header">
                    <div className="column-header">Season</div>
                    <div className="column-header fish-name">Fish</div>
                    <div>!</div>
                    <div className="column-header">Season</div>
                                <div className="column-header">Bag Limit</div>
                                <div className="column-header">Min. Size</div>
                                <div className="column-header">Max. Size</div>
                                <div className="column-header">Restrictions</div>
                </div>
                
                <div className="body">
                    {Object.keys(test ?? {}).map((fishName, index) => (
                        <>
                            <div className={index % 2 === 0 ? 'even' : 'odd'}>
                                {`${test[fishName].season}`}
                                {test[fishName].limits.length > 1 
                                    ? <ExclamationTriangleIcon className="alert" title="Restrictions" />
                                    : null
                                }
                            </div>
                            <div className={`fish-name ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                {fishName}
                            </div>
                            <div className={`${index % 2 === 0 ? 'even' : 'odd'}`}>
                                <button onClick={openDetail} value={fishName}>
                                    <div className={`opener ${detailsOpen?.[fishName] ? 'open' : ''}`}>
                                        &#9650;
                                    </div>
                                </button>
                            </div>
                            <div className="limits">
                                
                                {test[fishName].limits.map((limit) => (
                                    <>
                                        <div>{renderSeasonDateSpan(limit)}</div>
                                        <div>{limit.bag_limit}</div>
                                        <div>{renderSizeOrNa(limit.minimum_size)}</div>
                                        <div>{renderSizeOrNa(limit.maximum_size)}</div>
                                        <div>{renderExtraFishDetail(limit)}</div>
                                    </>
                                ))}
                            </div>
                            
                        </>
                    ))}
                </div>
            </div>



            <DataTable
                isLoading={isLoading}
                data={results}
                uniqueKey="id"
                schema={{
                    Fish: renderFishColumn,
                    'Min Size': (row) => row.minimum_size ?? 'N/A',
                    'Max Size': (row) => row.maximum_size ?? 'N/A',
                    Limit: (row) => row.bag_limit ?? 'Unlimited',
                    'Season Start': (row) =>
                        format(
                            parseMySqlDate(row.season_start),
                            config.displayDayMonthFormat,
                        ),
                    'Season End': (row) =>
                        format(
                            parseMySqlDate(row.season_end),
                            config.displayDayMonthFormat,
                        ),
                }}
            />
        </div>
    )
}

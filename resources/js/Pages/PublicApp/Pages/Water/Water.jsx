import './Water.scss'
import React, { useState } from 'react'

import { useInternalRouting } from '../../Components/InternalRouter/InternalRouter'

import config from '@/Util/config'
import { format, isBefore, compareAsc, isEqual } from 'date-fns'
import parseMySqlDate from '@/Util/parseMySqlDate'

import { PlayIcon } from '@heroicons/react/24/solid'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import LoadingSpinner from '@/Components/LoadingSpinner/LoadingSpinner'
import Tooltip from '@/Components/Tooltip/Tooltip'

export default function Water({ children, id, route, ...rest }) {
    const [results, setResults] = useState([])
    const [fishes, setFishes] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const internalRouting = useInternalRouting()
    React.useEffect(() => {
        internalRouting.setLoading(false)
    }, [])

    React.useEffect(() => {
        setIsLoading(true)
        axios
            .get(route(id, ''))
            .then((result) => {
                setResults(result.data.limits ?? [])
            })
            .finally(() => setIsLoading(false))
    }, [])

    React.useEffect(() => {
        setFishes(formatResults(results))
    }, [results])

    function formatFishingMethod(limit) {
        let fishingMethod = ''

        if (limit?.fishing_method?.name ===
                'May only be angled by artificial fly or baited barbless hook with a single point'
        ) {
            fishingMethod = 'Fly Fishing'
        } else {
            fishingMethod = limit?.fishing_method?.name ?? ''
        }
        return fishingMethod
    }

    function formatTidal(limit) {
        let text = ''
        if (limit.tidal_category) {
            if (text) {
                text += ' in '
            }
            text += limit.tidal_category.name + ' waters'
        }
        return text
    }

    function convertLimit(limit) {
        return {
            seasonStart: parseMySqlDate(limit.season_start),
            seasonEnd: parseMySqlDate(limit.season_end),
            bagLimit: limit.bag_limit,
            minSize: limit.minimum_size,
            maxSize: limit.maximum_size,
            fishingMethod: formatFishingMethod(limit),
            tidal: formatTidal(limit),
            water: limit?.water?.name ?? '',
            waterDescription: limit.water_description ?? ''
        }
    }

    function formatResults(results) {
        if (!results.length) {
            return
        }

        const fish = results.reduce((a, v) => {
            const fishName = v?.fish?.name ?? null
            if (!a[fishName]) {
                const entry = {
                    seasonStart: null,
                    seasonEnd: null,
                    limits: [],
                }
                a[fishName] = entry
            }
            a[fishName].limits.push(convertLimit(v))
            return a
        }, {})

        Object.keys(fish).forEach((fishName) => {

            // normalize duplicates
            fish[fishName].limits = fish[fishName].limits.reduce((a, v) => {
                let i = 0;
                let duplicate = false
                while (!duplicate && i < a.length) {
                    if (!a[i].waterDescription
                        && isEqual(v.seasonStart, a[i].seasonStart) 
                        && isEqual(v.seasonEnd, a[i].seasonEnd)
                        && v.bagLimit === a[i].bagLimit
                        && v.minimumSize === a[i].minimumSize
                        && v.maximumSize === a[i].maximumSize) {
                            duplicate = true
                            if (v.fishingMethod !== a[i].fishingMethod) {
                                a[i].fishingMethod = ''
                            }
                            if (v.tidal !== a[i].tidal) {
                                a[i].tidal = ''
                            }
                    }
                    i++
                }
                if (!duplicate) {
                    a.push(v)
                }
                return a
            }, [])


            // sort by start date and end date
            fish[fishName].limits = fish[fishName].limits.sort((a, b) => {
                const startComparison = compareAsc(a.seasonStart, b.seasonStart)
                if (startComparison === 0) {
                    return compareAsc(b.seasonEnd, a.seasonEnd)
                }
                return startComparison
            })

            // find start and end dates for all seasons
            fish[fishName].limits.forEach((limit) => {
                if (!fish[fishName].seasonStart) {
                    fish[fishName].seasonStart = limit.seasonStart
                } else {
                    if (isBefore(limit.seasonStart, fish[fishName].seasonStart)) {
                        fish[fishName].seasonStart = limit.seasonStart
                    }
                }
                if (!fish[fishName].seasonEnd) {
                    fish[fishName].seasonEnd = limit.seasonEnd
                } else {
                    if (!isBefore(limit.seasonEnd, fish[fishName].seasonEnd)) {
                        fish[fishName].seasonEnd = limit.seasonEnd
                    }
                }
            })

            /*
            const objectMap = {};
            let i = 0;
            while (i < fish[fishName].limits.length) {
                const obj = fish[fishName].limits[i];
                const key = `${obj.fishingMethod}-${obj.tidal}-${obj.description}`; // Create a unique key using name and description

                if (objectMap[key]) {
                    // If a duplicate is found, add it to the `group` property of the original object
                    if (!objectMap[key].group) {
                        objectMap[key].group = [];
                    }
                    objectMap[key].group.push(obj); // Add duplicate to group
                    fish[fishName].limits.splice(i, 1); // Remove duplicate from the array
                } else {
                    // Mark this object as the original for its key
                    objectMap[key] = obj;
                    i++; // Move to the next element
                }
            }
            */
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

    const renderSeasonDateSpan = (o) => {
        console.log(format(o.seasonStart, config.displayDayMonthShortFormat))
        return (
        <>
            <span>
                {format(o.seasonStart, config.displayDayMonthShortFormat)}
                {' '}
            </span>
            <span>
                -{' '}
                {format(o.seasonEnd, config.displayDayMonthShortFormat)}
            </span>
        </>)
    }

    const renderWaterStretch = (limit) => {
        return limit.water_description ? (
            <div className="water-description">
                {limit.tidal || limit.fishingMethod ? ' ' : limit.water.name + ' '}
                {limit.water_description}
            </div>
        ) : null
    }

    const renderExceptionDetail = (limit) => {
        let text = limit.fishingMethod
        if (limit.tidal) {
            if (text) {
                text += ' in '
            }
            text += limit.tidal
        }
        if (!text) {
            text += limit.water
        }
        text += ' ' + limit.waterDescription
        return text
    }

    const renderSizeOrNa = (size) => {
        return size ?? 'N/A'
    }

    const renderNumberOrUnlimited = (number) => {
        if (number === null) {
            return (<span className="text-md leading-4">&#8734;</span>)
        }
        return number
    }

    return (
        <div className="Water">
            <div className="fish-grid">
                <div className="header">
                    <div className="column-header date-range">
                        Season/Restrictions
                    </div>
                    <div className="column-header">Bag Limit</div>
                    <div className="column-header">Min. Size</div>
                    <div className="column-header">Max. Size</div>
                </div>

                <div className="body">
                    {isLoading ? (
                        <div className="loading-spinner-container">
                            <LoadingSpinner />
                        </div>
                    ) : (
                        Object.keys(fishes ?? {}).map((fishName, index) => (
                            <>
                                <button
                                    onClick={openDetail}
                                    value={fishName}
                                    className={`fish-name ${index % 2 === 0 ? 'even' : 'odd'} ${detailsOpen?.[fishName] ? 'open' : ''}`}
                                >
                                    <div className="fish-season">
                                        <strong>
                                            <PlayIcon className="open-indicator" />
                                            {fishName}
                                        </strong>
                                        <em>
                                            ({renderSeasonDateSpan(fishes[fishName])})
                                        </em>
                                    </div>
                                    <div className="flex">
                                        {fishes[fishName].limits.length > 1 ? (
                                            <Tooltip message="Some Restrictions">
                                                <ExclamationTriangleIcon className="alert" />
                                            </Tooltip>
                                        ) : null}
                                    </div>
                                </button>

                                <div
                                    className={`limits ${index % 2 === 0 ? 'even' : 'odd'} ${detailsOpen?.[fishName] ? 'open' : ''}`}
                                >
                                    {fishes[fishName].limits.map((limit) => (
                                        <>
                                            <div className="season-exception">
                                                <div className="date-span">
                                                    {renderSeasonDateSpan(
                                                        limit,
                                                    )}
                                                </div>
                                                <div className="exception">
                                                    {renderExceptionDetail(limit)}
                                                </div>
                                            </div>
                                            <div>
                                                {renderNumberOrUnlimited(
                                                    limit.bagLimit,
                                                )}
                                            </div>
                                            <div>
                                                {renderSizeOrNa(
                                                    limit.minSize,
                                                )}
                                            </div>
                                            <div>
                                                {renderSizeOrNa(
                                                    limit.maxSize,
                                                )}
                                            </div>
                                            {renderWaterStretch(limit)}
                                        </>
                                    ))}
                                </div>
                            </>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

import './Water.scss'
import { formatResults } from './WaterTransformers'
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

    const isMobile = true

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

    const [detailsOpen, setDetailsOpen] = useState({})

    const openDetail = (event) => {
        console.log(event)
        if (event.defaultPrevented) {
            return
        }

        const fishName = event.currentTarget.value

        setDetailsOpen((oldDetailsOpen) => {
            const newDetailsOpen = JSON.parse(JSON.stringify(oldDetailsOpen))
            newDetailsOpen[fishName] = !newDetailsOpen?.[fishName]
            return newDetailsOpen
        })
    }

    const renderSeasonDateSpan = (o, inGroup = false) => {
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
                {inGroup ? ',' : ''}
            </span>
        </>)
    }

    const renderWaterStretch = (limit) => {
        return limit.waterDescription ? (
            <em className="water-description">
                {renderExceptionDetail(limit, false)}
            </em>
        ) : null
    }

    const renderExceptionDetail = (limit, hasDescription = true) => {
        if (hasDescription && limit.waterDescription) {
            return ''
        }
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

    const renderMinSize = (limit) => {
        
        const text = limit?.minSize ?? 'N/A'
        if (limit.bagLimit === 0) {
            return (<span className="invalid">{text}</span>)
        }
        return text
    }

    const renderMaxSize = (limit) => {
        const text = limit?.maxSize ?? 'N/A'
        if (limit.bagLimit === 0) {
            return (<span className="invalid">{text}</span>)
        }
        return text
    }

    const renderBagLimit = (limit) => {
        if (limit.bagLimit === null) {
            return (<span className="text-md leading-4">&#8734;</span>)
        }
        return limit.bagLimit
    }

    const renderFishLimit = (limit, inGroup = false) => {
        return (
            <div className={`limit ${inGroup ? 'group' : ''} ${limit.group ? 'group-start' : ''}`}>
                <div className="season-exception">
                    <span className="date-span">
                        {renderSeasonDateSpan(limit, limit.group || inGroup)}
                    </span>
                    <em className="exception">
                        &nbsp;{renderExceptionDetail(limit)}
                    </em>
                </div>
                <div>
                    {renderBagLimit(limit)}
                </div>
                <div>
                    {renderMinSize(limit)}
                </div>
                <div>
                    {renderMaxSize(limit)}
                </div>
            </div>
        )
    }

    const renderFishLimits = (limits, group = false) => (
        limits.map((limit, index) => (
            limit?.group
                ? (
                    <>
                    {renderFishLimit(limit)}
                    {renderFishLimits(limit.group, true)}
                    {renderWaterStretch(limit)}
                    </>
                )
                : (<>
                    {renderFishLimit(limit, group)}
                    {group ? null : renderWaterStretch(limit)}
                </>)
    )))

    

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
                                    {renderFishLimits(fishes[fishName].limits)}
                                </div>
                            </>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

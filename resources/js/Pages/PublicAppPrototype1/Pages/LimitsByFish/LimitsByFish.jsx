import './LimitsByFish.scss'
import React, { useState } from 'react'

import {
    InternalLink,
    useInternalRouting,
} from '../../Components/InternalRouter/InternalRouter'
import DataTable from '@/Components/DataTable/DataTable'
import config from '@/Util/config'
import { format } from 'date-fns'
import parseMySqlDate from '@/Util/parseMySqlDate'

export default function LimitsByFish({ id, route }) {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    React.useEffect(() => {
        console.log({ route })
        setIsLoading(true)
        axios
            .get(route(id))
            .then((result) => {
                setResults(result.data.limits ?? [])
            })
            .finally(() => setIsLoading(false))
    }, [])

    const renderWaterColumn = (row) => {
        let extra = []

        if (row.location) {
            extra.push(row.location.name)
        }

        if (row.water) {
            extra.push(', ' + row.water.name)
        }

        if (!row.water && row.waters_category) {
            extra.push(': ' + row.waters_category.name)
        }

        if (row.boundary) {
            extra.push('(' + row.boundary.name + ')')
        }

        if (row.tidal_category) {
            extra.push('(' + row.tidal_category.name + ' waters)')
        }

        if (row.fishing_method) {
            if (
                row.fishing_method.name ===
                'May only be angled by artificial fly or baited barbless hook with a single point'
            ) {
                extra.push(': Fly Fishing')
            } else {
                extra.push(': ' + row.fishing_method.name)
            }
        }

        if (row.water_description) {
            extra.push(row.water_description)
        }

        return (
            <>
                {extra.map((text) => (
                    <span className="extra">{text}</span>
                ))}
            </>
        )
    }

    return (
        <div className="LimitsByFish">
            <DataTable
                isLoading={isLoading}
                data={results}
                uniqueKey="id"
                schema={{
                    'Water Body/Fishing Method': renderWaterColumn,
                    'Min Size': (row) => row.minimum_size ?? 'N/A',
                    'Max Size': (row) => row.maximum_size ?? 'N/A',
                    Limit: (row) => row.bag_limit ?? 'Unlimited',
                    'Season Start': (row) =>
                        format(
                            parseMySqlDate(row.season_start),
                            config.displayDayMonthShortFormat,
                        ),
                    'Season End': (row) =>
                        format(
                            parseMySqlDate(row.season_end),
                            config.displayDayMonthShortFormat,
                        ),
                }}
            />
        </div>
    )
}

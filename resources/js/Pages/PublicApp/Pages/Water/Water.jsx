import React, { useState } from 'react';
import './Water.scss';

import { useInternalRouting } from '../../Components/InternalRouter/InternalRouter';

import DataTable from '@/Components/DataTable/DataTable';

import config from '@/Util/config';
import { format } from 'date-fns';
import parseMySqlDate from '@/Util/parseMySqlDate';

export default function Water({ children, id, route, ...rest }) {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    React.useEffect(() => {
        setIsLoading(true)
        axios
            .get(route(id, '')).then((result) => {
                setResults(result.data.limits ?? []);
            })
            .finally(() => setIsLoading(false))
    }, []);

    const internalRouting = useInternalRouting();
    React.useEffect(() => {
        internalRouting.setLoading(false);
    }, []);

    const test = results;

    const renderFishColumn = (row) => {

        const fishName = row.fish.name

        let extra = [];

        if (row.tidal_category) {
            extra.push(row.tidal_category.name + ' waters');
        }

        if (row.fishing_method) {
            if (row.fishing_method.name  === 'May only be angled by artificial fly or baited barbless hook with a single point') {
                extra.push('Fly Fishing')
            } else {
                extra.push(row.fishing_method.name)
            }
        }

        return (
            <>
                {fishName}
                {extra.map((text) => <span className="extra">({text})</span>)}
            </>
        )
    }

    return (
        <div className="Water">
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
    );
}

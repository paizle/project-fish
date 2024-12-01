import React from 'react';
import './Water.scss';

import { useInternalRouting } from '../../Components/InternalRouter/InternalRouter';

import DataTable from '@/Components/DataTable/DataTable';

import config from '@/Util/config';
import mySQLTimestampToDate from '@/Util/mySQLTimestampToDate';
import { format } from 'date-fns';

export default function Water({ children, id, route, ...rest }) {
    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        console.log({ route });

        axios.get(route(id, '')).then((result) => {
            setResults(result.data.limits ?? []);
        });
    }, []);

    const internalRouting = useInternalRouting();
    React.useEffect(() => {
        internalRouting.setLoading(false);
    }, []);

    const test = results;

    return (
        <div className="Water">
            <DataTable
                data={results}
                uniqueKey="id"
                schema={{
                    Fish: (row) => row.fish?.name ?? '(all)',
                    'Season Start': (row) =>
                        format(
                            mySQLTimestampToDate(row.season_start),
                            config.displayDayMonthFormat,
                        ),
                    'Season End': (row) =>
                        format(
                            mySQLTimestampToDate(row.season_end),
                            config.displayDayMonthFormat,
                        ),
                    Tidal: (row) => row.tidal_category_id ?? '(all)',
                    Limit: (row) => row.bag_limit ?? 'Unlimited',
                    'Min Size': (row) => row.minimum_size ?? 'N/A',
                    'Max Size': (row) => row.maximum_size ?? 'N/A',
                }}
            />
        </div>
    );
}

import './FishLimits.scss';
import DataTableWithOperations from '@/Components/DataTableWithOperations/DataTableWithOperations';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

import formatDate from '@/Util/formatDate';
import parseMySqlDate from '@/Util/parseMySqlDate'
import Tooltip from '@/Components/Tooltip/Tooltip';

export default function FishLimits({
    fishLimits,
    locations,
    fishCategories,
    fishes,
    boundaries,
    watersCategories,
    tidalCategories,
    waters,
    fishingMethods
}) {
    
    const loadFishLimitsData = (filters) => {
        return axios
            .post(route('fishLimits.data'), { filters })
            .then((response) => response.data.fishLimits)
            .catch((error) => {
                console.error(
                    'Error:',
                    error.response ? error.response.data : error.message,
                );
            })
    }

    return (
        <AuthenticatedLayout header={null}>
            <Head title="Project: FISH - Fishing Limits" />

            <div className="FishLimits">
    
                <div className="box">
                    <DataTableWithOperations
                        data={fishLimits}
                        loadData={loadFishLimitsData}
                        onFiltersUpdate={loadFishLimitsData}
                        uniqueKey="id"
                        schema={{
                            ID: (row) => row.id,
                            Location: (row) =>
                                    locations[row.location_id]?.name ??
                                    '(all)',
                            'Fish Category': (row) =>
                                    fishCategories[row.fish_category_id]
                                        ?.name ?? '(all)',
                            Fish: (row) => fishes[row.fish_id]?.name ?? '(all)',
                            Boundary: (row) =>
                                    boundaries[row.boundary_id]?.name ??
                                    '(all)',
                            'Waters Category': (row) =>
                                    watersCategories[row.waters_category_id]
                                        ?.name ?? '(all)',
                            Tidal: (row) =>
                                    tidalCategories[row.tidal_category_id]
                                        ?.name ?? '(all)',
                            Waterbody: (row) => waters[row.water_id]?.name ?? '(all)',
                            'Water Stretch': (row) => row.water_description,
                            'Fishing Method': (row) => fishingMethods[row.fishing_method_id]?.name ?? '(all)',
                            'Note': (row) => row.note,
                            Limit: (row) => {
                                return row.note
                                    ? (    
                                        <Tooltip message={row.note}>
                                            {row.bag_limit ?? 'Unlimited'}*
                                        </Tooltip>
                                    )
                                    : row.bag_limit ?? 'Unlimited'
                            },
                            'Min Size': (row) => row.minimum_size ?? 'N/A',
                            'Max Size': (row) => row.maximum_size ?? 'N/A',
                            'Season Start': (row) => formatDate(parseMySqlDate(row.season_start)),
                            'Sesason End': (row) => formatDate(parseMySqlDate(row.season_end)),
                        }}
                        options={{
                            'toggleShow' : ['Water Stretch', 'Note'],
                            'filters': {
                                'Location': {
                                    key: 'location_id',
                                    options: Object.keys(locations).reduce((a, key) => {
                                        a[locations[key].id] = locations[key].name
                                        return a
                                    }, {}),
                                },
                                'Fish Category': {
                                    key: 'fish_category_id',
                                    options: Object.keys(fishCategories).reduce((a, key) => {
                                        a[fishCategories[key].id] = fishCategories[key].name
                                        return a
                                    }, {}),
                                },
                                'Fish': {
                                    key: 'fish_id',
                                    options: Object.keys(fishes).reduce((a, key) => {
                                        a[fishes[key].id] = fishes[key].name
                                        return a
                                    }, {}),
                                },
                                'Boundary': {
                                    key: 'boundary_id',
                                    options: Object.keys(boundaries).reduce((a, key) => {
                                        a[boundaries[key].id] = boundaries[key].name
                                        return a
                                    }, {}),
                                },
                                'Waters Category': {
                                    key: 'waters_category_id',
                                    options: Object.keys(watersCategories).reduce((a, key) => {
                                        a[watersCategories[key].id] = watersCategories[key].name
                                        return a
                                    }, {}),
                                },
                                'Tidal': {
                                    key: 'tidal_id',
                                    options: Object.keys(tidalCategories).reduce((a, key) => {
                                        a[tidalCategories[key].id] = tidalCategories[key].name
                                        return a
                                    }, {}),
                                },
                                'Waterbody': {
                                    key: 'water_id',
                                    options: Object.keys(waters).reduce((a, key) => {
                                        a[waters[key].id] = waters[key].name
                                        return a
                                    }, {}),
                                },
                                'Fishing Method': {
                                    key: 'fishing_method_id',
                                    options: Object.keys(fishingMethods).reduce((a, key) => {
                                        a[fishingMethods[key].id] = fishingMethods[key].name
                                        return a
                                    }, {}),
                                }
                            }
                        }}                    />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

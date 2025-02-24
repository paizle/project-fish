import './FishLimits.scss'
import DataTableWithOperations, { SortingMethods } from '@/Components/DataTableWithOperations/DataTableWithOperations'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React, { useRef } from 'react'

import formatDate from '@/Util/formatDate'
import parseMySqlDate from '@/Util/parseMySqlDate'
import Tooltip from '@/Components/Tooltip/Tooltip'

export default function FishLimits({
    fishLimits,
    locations,
    fishCategories,
    fishes,
    boundaries,
    watersCategories,
    tidalCategories,
    waters,
    fishingMethods,
}) {
    const forwardRef = useRef(null)

    const loadFishLimitsData = (filters) => {
        return axios
            .post(route('fishLimits.data'), { filters })
            .then((response) => response.data.fishLimits)
            .catch((error) => {
                console.error(
                    'Error:',
                    error.response ? error.response.data : error.message,
                )
            })
    }

    const renderFishingMethodRow = (row) => {
        const flyFishing =
            'May only be angled by artificial fly or baited barbless hook with a single point'
        const test = fishingMethods[row.fishing_method_id]?.name ?? '(all)'

        if (test === flyFishing) {
            return (
                <Tooltip message={flyFishing} containerRef={forwardRef}>
                    Fly Fishing
                </Tooltip>
            )
        } else {
            return test
        }
    }

		const tableSchema = {
			ID: {
				render: (row) => row.id,
				sorting: SortingMethods.NUMERIC
			},
			Location: {
				render: (row) => locations[row.location_id]?.name ?? '(all)',
				sorting: SortingMethods.ALPHABETIC
			},
			'Fish Category':{
				render: (row) => fishCategories[row.fish_category_id]?.name ??
					'(all)',
				sorting: SortingMethods.ALPHABETIC
			},
			Fish: {
				render: (row) => fishes[row.fish_id]?.name ?? '(all)',
				sorting: SortingMethods.ALPHABETIC
			},
			Boundary: {
					render: (row) => boundaries[row.boundary_id]?.name ?? '(all)',
					sorting: SortingMethods.ALPHABETIC
			},
			'Waters Category': {
				render: (row) => watersCategories[row.waters_category_id]?.name ?? '(all)',
				sorting: SortingMethods.ALPHABETIC
			},
			Tidal: {
				render: (row) => tidalCategories[row.tidal_category_id]?.name ?? '(all)',
				sorting: SortingMethods.ALPHABETIC
			},
			Waterbody: {
				render: (row) => waters[row.water_id]?.name ?? '(all)',
				sorting: SortingMethods.ALPHABETIC,
			},
			'Water Stretch': {
				render: (row) => row.water_description ? (
							<Tooltip
									message={row.water_description}
									containerRef={forwardRef}
							>
									&nbsp;*&nbsp;
							</Tooltip>
					) : null,
				sorting: false
			},
			'Fishing Method': {
				render: renderFishingMethodRow,
				sorting: SortingMethods.ALPHABETIC
			},
			Note: {
				render: (row) => row.note,
				sorting: false
			},
			Limit: {
				render: (row) => {
					return row.note ? (
							<Tooltip
									message={row.note}
									containerRef={forwardRef}
							>
									{row.bag_limit ?? 'Unlimited'}*
							</Tooltip>
					) : (
							(row.bag_limit ?? 'Unlimited')
					)
				},
				sorting: SortingMethods.ALPHABETIC
			},
			'Min Size': {
				render: (row) => row.minimum_size ?? 'N/A',
				sorting: SortingMethods.NUMERIC
			},
			'Max Size': {
				render: (row) => row.maximum_size ?? 'N/A',
				sorting: SortingMethods.NUMERIC,
			},
			'Season Start': {
				render: (row) => formatDate(parseMySqlDate(row.season_start)),
				sorting: SortingMethods.CHRONOLOGICAL,
			},
			'Season End': {
				render: (row) => formatDate(parseMySqlDate(row.season_end)),
				sorting: SortingMethods.CHRONOLOGICAL,
			}
	} 

    return (
        <AuthenticatedLayout>
            <div className="FishLimits">
                <div className="box">
                    <DataTableWithOperations
                        forwardRef={forwardRef}
                        className="sticky-headers"
                        data={fishLimits}
                        loadData={loadFishLimitsData}
                        onFiltersUpdate={loadFishLimitsData}
                        uniqueKey="id"
                        schema={tableSchema}
                        options={{
                            toggleShow: ['Water Stretch', 'Note'],
                            filters: {
                                Location: {
                                    key: 'location_id',
                                    options: Object.keys(locations).reduce(
                                        (a, key) => {
                                            a[locations[key].id] =
                                                locations[key].name
                                            return a
                                        },
                                        {},
                                    ),
                                },
                                'Fish Category': {
                                    key: 'fish_category_id',
                                    options: Object.keys(fishCategories).reduce(
                                        (a, key) => {
                                            a[fishCategories[key].id] =
                                                fishCategories[key].name
                                            return a
                                        },
                                        {},
                                    ),
                                },
                                Fish: {
                                    key: 'fish_id',
                                    options: Object.keys(fishes).reduce(
                                        (a, key) => {
                                            a[fishes[key].id] = fishes[key].name
                                            return a
                                        },
                                        {},
                                    ),
                                },
                                Boundary: {
                                    key: 'boundary_id',
                                    options: Object.keys(boundaries).reduce(
                                        (a, key) => {
                                            a[boundaries[key].id] =
                                                boundaries[key].name
                                            return a
                                        },
                                        {},
                                    ),
                                },
                                'Waters Category': {
                                    key: 'waters_category_id',
                                    options: Object.keys(
                                        watersCategories,
                                    ).reduce((a, key) => {
                                        a[watersCategories[key].id] =
                                            watersCategories[key].name
                                        return a
                                    }, {}),
                                },
                                Tidal: {
                                    key: 'tidal_id',
                                    options: Object.keys(
                                        tidalCategories,
                                    ).reduce((a, key) => {
                                        a[tidalCategories[key].id] =
                                            tidalCategories[key].name
                                        return a
                                    }, {}),
                                },
                                Waterbody: {
                                    key: 'water_id',
                                    options: Object.keys(waters).reduce(
                                        (a, key) => {
                                            a[waters[key].id] = waters[key].name
                                            return a
                                        },
                                        {},
                                    ),
                                },
                                'Fishing Method': {
                                    key: 'fishing_method_id',
                                    options: Object.keys(fishingMethods).reduce(
                                        (a, key) => {
                                            a[fishingMethods[key].id] =
                                                fishingMethods[key].name
                                            return a
                                        },
                                        {},
                                    ),
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

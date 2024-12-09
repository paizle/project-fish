import DataTable from '@/Components/DataTable/DataTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import './FishLimits.scss';

export default function FishLimits({
    fishLimits,
    locations,
    fishCategories,
    fishes,
    boundaries,
    watersCategories,
    tidalCategories,
    waters,
}) {
    const [data, setData] = React.useState([]);

    const [filters, setFilters] = React.useState({});

    React.useEffect(() => {
        setData(fishLimits);
        console.log({ fishLimits });
    }, []);

    const updateFilter = (filterName) => (event) => {
        const newFilters = JSON.parse(JSON.stringify(filters));
        newFilters[filterName] = event.target.value;
        setFilters(newFilters);

        axios
            .post(route('fishLimits.data'), { filters: newFilters })
            .then((response) => {
                setData(response.data.fishLimits);
                console.log(response.data.fishLimits);
            })
            .catch((error) => {
                console.error(
                    'Error:',
                    error.response ? error.response.data : error.message,
                ); // Handle error
            });
    };

    return (
        <AuthenticatedLayout header={null}>
            <Head title="Project: FISH - Fishing Limits" />

            <div className="FishLimits">
                
                    <div className="Filters">
                        <header>Filters: </header>
                        <div>
                            <label>
                                Location:
                                <select
                                    value={filters.locationId}
                                    name="locationId"
                                    onChange={updateFilter('locationId')}
                                >
                                    <option value="">(all)</option>
                                    {Object.keys(locations).map((id) => (
                                        <option key={id} value={id}>
                                            {locations[id].name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    
                        <div>
                            <label>
                                Fish Category:
                                <select
                                    value={filters.fishCategoryId}
                                    name="fishCategoryId"
                                    onChange={updateFilter('fishCategoryId')}
                                >
                                    <option value="">(all)</option>
                                    {Object.keys(fishCategories).map((id) => (
                                        <option key={id} value={id}>
                                            {fishCategories[id].name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Fish:
                                <select
                                    value={filters.fishId}
                                    name="fishId"
                                    onChange={updateFilter('fishId')}
                                >
                                    <option value="">(all)</option>
                                    {Object.keys(fishes).map((id) => (
                                        <option key={id} value={id}>
                                            {fishes[id].name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Boundary:
                                <select
                                    value={filters.boundaryId}
                                    onChange={updateFilter('boundaryId')}
                                >
                                    <option value="">(all)</option>
                                    {Object.keys(boundaries).map((id) => (
                                        <option key={id} value={id}>
                                            {boundaries[id].name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Waters Category:
                                <select
                                    value={filters.watersCategoryId}
                                    onChange={updateFilter('watersCategoryId')}
                                >
                                    <option value="">(all)</option>
                                    {Object.keys(watersCategories).map((id) => (
                                        <option key={id} value={id}>
                                            {watersCategories[id].name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Tidal Category:
                                <select
                                    value={filters.tidalCategoryId}
                                    onChange={updateFilter('tidalCategoryId')}
                                >
                                    <option value="">(all)</option>
                                    {Object.keys(tidalCategories).map((id) => (
                                        <option key={id} value={id}>
                                            {tidalCategories[id].name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Water:
                                <select
                                    value={filters.waterId}
                                    onChange={updateFilter('watersId')}
                                >
                                    <option value="">(all)</option>
                                    {Object.keys(waters).map((id) => (
                                        <option key={id} value={id}>
                                            {waters[id].name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="box">
                    <DataTable
                        data={data}
                        uniqueKey="id"
                        schema={{
                            Location: filters?.locationId
                                ? false
                                : (row) =>
                                      locations[row.location_id]?.name ??
                                      '(all)',
                            'Fish Category': filters?.fishCategoryId
                                ? false
                                : (row) =>
                                      fishCategories[row.fish_category_id]
                                          ?.name ?? '(all)',
                            Fish: filters?.fishId
                                ? false
                                : (row) => fishes[row.fish_id]?.name ?? '(all)',
                            Boundary: filters?.boundaryId
                                ? false
                                : (row) =>
                                      boundaries[row.boundary_id]?.name ??
                                      '(all)',
                            'Waters Category': filters?.watersCategoryId
                                ? false
                                : (row) =>
                                      watersCategories[row.waters_category_id]
                                          ?.name ?? '(all)',
                            Tidal: filters?.tidalCategoryId
                                ? false
                                : (row) =>
                                      tidalCategories[row.tidal_category_id]
                                          ?.name ?? '(all)',
                            Waters: (row) =>
                                filters?.watersId
                                    ? false
                                    : (waters[row.water_id]?.name ?? '(all)'),
                            Limit: (row) => row.bag_limit ?? 'Unlimited',
                            'Min Size': (row) => row.minimum_size ?? 'N/A',
                            'Max Size': (row) => row.maximum_size ?? 'N/A',
                        }}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

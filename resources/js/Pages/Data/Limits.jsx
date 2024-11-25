import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import DataSubmenu from './Partials/DataSubmenu';

import DataTable from '@/Components/DataTable/DataTable';

export default function Data({locations, fish_categories, fishes, boundaries, water_categories, waters, limits}) {
    
    return (
        <AuthenticatedLayout
            header={
                <>
                    <div className="flex">
                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <DataSubmenu />
                        </div>
                    </div>
                </>
            }
        >
            <Head title="Project: FISH - Fishing Limits" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        
                        <DataTable data={limits} schema={{
                                'Location': '',
                                'Fish Category': '',
                                'Fish': '',
                                'Boundary': '',
                                'Water Category': '',
                                'Waters': '',
                                'Limit': '',
                                'Min Size': '',
                                'Max Size': ''
                            }}
                        >
                            {(row) => (
                                <tr key={row.id} data-id={locations[row.location_id]?.id}>
                                    <td>{locations[row.location_id]?.name ?? ''}</td>
                                    <td>{fish_categories[row.fish_category_id]?.name ?? ''}</td>
                                    <td>{fishes[row.fish_id]?.name ?? ''}</td>
                                    <td>{boundaries[row.boundary_id]?.name ?? ''}</td>
                                    <td>{water_categories[row.waters_category_id]?.name ?? ''}</td>
                                    <td>{waters[row.water_id]?.name ?? '(all)'}</td>
                                    <td>{row.bag_limit ?? ''}</td>
                                    <td>{row.minimum_size ?? ''}</td>
                                    <td>{row.maximum_size ?? ' - '}</td>
                                </tr>
                            )}
                        </DataTable>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}

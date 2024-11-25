import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import DataSubmenu from './Partials/DataSubmenu';

import DataTable from '@/Components/DataTable/DataTable';

export default function Locations({data}) {
    
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
            <Head title="Project: FISH - Locations Data" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <DataTable data={data} schema={{
                            'Location': 'name',
                            'Description': 'description',
                            'Created': 'created_at',
                            'Updated': 'updated_at'
                        }} />
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}

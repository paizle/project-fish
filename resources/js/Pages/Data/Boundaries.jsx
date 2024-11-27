import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DataSubmenu from './Partials/DataSubmenu';
import DataTable from '@/Components/DataTable/DataTable';
import { format } from "date-fns"
import mySQLTimestampToDate from '@/Util/mySQLTimestampToDate'
import config from '@/Util/config'

export default function Boundaries({data}) {
    
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
            <Head title="Project: FISH - Fishes Data" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <DataTable data={data} schema={{
                            'Name': 'name',
                            'Created': (row) => format(mySQLTimestampToDate(row.created_at), config.displayDateFormat),
                            'Updated': (row) => format(mySQLTimestampToDate(row.updated_at), config.displayDateFormat),
                        }} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

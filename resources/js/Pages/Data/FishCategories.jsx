import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DataSubmenu from './Partials/DataSubmenu/DataSubmenu';
import DataTable from '@/Components/DataTable/DataTable';
import { format } from "date-fns"
import mySQLTimestampToDate from '@/Util/mySQLTimestampToDate'
import config from '@/Util/config'

export default function FishCategories({data}) {
    
    return (
        <AuthenticatedLayout header={<DataSubmenu />}>

            <Head title="Project: FISH - Fish Categories Data" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <DataTable data={data} schema={{
                            'Name': 'name',
                            'Created': (row) => format(mySQLTimestampToDate(row.created_at), config.displayDateYearFormat),
                            'Updated': (row) => format(mySQLTimestampToDate(row.updated_at), config.displayDateYearFormat),
                        }} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

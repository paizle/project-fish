import DataTable from '@/Components/DataTable/DataTable'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout'
import config from '@/Util/config'
import mySQLTimestampToDate from '@/Util/mySQLTimestampToDate'
import { Head } from '@inertiajs/react'
import { format } from 'date-fns'
import DataSubmenu from './Partials/DataSubmenu/DataSubmenu'

export default function WaterCategories({ data }) {
    return (
        <AuthenticatedLayout header={<DataSubmenu />}>
            <Head title="Project: FISH - Waters Data" />

            <div className="box">
                <DataTable
                    data={data}
                    schema={{
                        Name: 'name',
												Region: (row) => row?.region?.name,
                        Created: (row) =>
                            format(
                                mySQLTimestampToDate(row.created_at),
                                config.displayDateYearFormat,
                            ),
                        Updated: (row) =>
                            format(
                                mySQLTimestampToDate(row.updated_at),
                                config.displayDateYearFormat,
                            ),
                    }}
                />
            </div>
        </AuthenticatedLayout>
    )
}

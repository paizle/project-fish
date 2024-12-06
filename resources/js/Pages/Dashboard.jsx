import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout header={<h1>Dashboard</h1>}>
            <Head title="Dashboard" />

            <div className="box">
                <strong>You're logged in!</strong>
            </div>
        </AuthenticatedLayout>
    );
}

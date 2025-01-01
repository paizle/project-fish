import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import AdminSubMenu from './partials/AdminSubMenu'
export default function Edit() {

    return (
        <AuthenticatedLayout header={<AdminSubMenu />}>
            <Head title="Project: FISH" />

            <div className="box">
                <a className="block text-center" href={route('public-app-prototype-1.page')} target="_blank">
                    Public App: By Fish
                    <img src="/images/by-fish.jpg" className="max-w-full" />
                </a>
            </div>
        </AuthenticatedLayout>
    )
}

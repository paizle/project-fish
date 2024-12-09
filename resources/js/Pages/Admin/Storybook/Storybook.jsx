import './Storybook.scss'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import AdminSubMenu from '../partials/AdminSubMenu'

export default function Storybook({ locations }) {
    return (
        <AuthenticatedLayout header={<AdminSubMenu />}>
            <Head title="Project: FISH" />

            <iframe className="Storybook" src="/storybook-static/index.html"></iframe>
           
        </AuthenticatedLayout>
    );
}

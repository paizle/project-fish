import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

import { Link, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

export default function AdminSubmenu() {

    return (
        <>
            <NavLink
                href={route('admin')}
                active={route().current('admin')}
            >
                Admin
            </NavLink>
        </>
    )
}
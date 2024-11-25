import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

import AdminSubmenu from './Partials/AdminSubmenu';

export default function Edit() {
    return (
        <AppLayout
            header={
                <div className="flex">
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <AdminSubmenu />
                    </div>
                </div>
            }
        >
            <Head title="Project: FISH" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        * one *
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        * two *
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        * three *
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

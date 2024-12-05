import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout header={<h1>Profile</h1>}>
            <Head title="Profile" />

                <div className="">
                    <div className="box my-2">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="box my-2">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="box my-2">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}

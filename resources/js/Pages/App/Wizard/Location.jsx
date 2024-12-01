import WizardCard from '@/Components/WizardCard/WizardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import BreadCrumb from './Partials/BreadCrumb/Breadcrumb';

const images = {
    'Lakes, ponds and reservoirs': '/images/lake.png',
    'Rivers, brooks and streams': '/images/river.png',
};

export default function Location({
    watersCategories,
    location,
    wizardBreadcrumb,
}) {
    return (
        <AuthenticatedLayout>
            <Head title="Project: FISH" />
            <BreadCrumb breadCrumb={wizardBreadcrumb} />

            <div className="flex flex-wrap justify-center gap-2">
                {watersCategories.map((watersCategory) => (
                    <WizardCard
                        href={route('wizard.watersCategory.page', {
                            id: watersCategory.id,
                            location_id: location.id,
                        })}
                        imageSrc={images[watersCategory.name]}
                        key={watersCategory.id}
                    >
                        {watersCategory.name}
                    </WizardCard>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}

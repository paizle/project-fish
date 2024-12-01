import WizardCard from '@/Components/WizardCard/WizardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BreadCrumb from './Partials/BreadCrumb/Breadcrumb';

export default function WatersCategory({
    location,
    watersCategory,
    fishCategories,
    wizardBreadcrumb,
}) {
    const images = {
        Trout: '/images/trout.jpg',
        Salmon: '/images/salmon.jpg',
        Bass: '/images/smallmouth-bass.png',
        'Non-Sport Fish': '/images/non-sport-fish.jpg',
    };

    return (
        <AuthenticatedLayout>
            <Head title="Project: FISH" />

            <BreadCrumb breadCrumb={wizardBreadcrumb} />

            <div className="flex flex-wrap justify-center gap-2">
                {fishCategories.map((fishCategory) => (
                    <WizardCard
                        key={fishCategory.id}
                        href={route('wizard.fishCategory.page', {
                            id: fishCategory.id,
                            location_id: location.id,
                            waters_category_id: watersCategory.id,
                        })}
                        imageSrc={images[fishCategory.name]}
                    >
                        {fishCategory.name}
                    </WizardCard>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}

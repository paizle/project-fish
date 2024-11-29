import './Wizard.scss'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import WizardCard from '@/Components/WizardCard/WizardCard'

const images = {
    'Upper Saint John': '/images/upper-saint-john-map.png',
    'Southwest': '/images/south-west-saint-john-map.png'
}

export default function Index({ locations }) {

    return (
        <AuthenticatedLayout>
            <Head title="Project: FISH" />

            <div className="my-8 flex flex-wrap justify-center gap-2">
                {locations.map((location) => images[location.name]
                    ?
                        <WizardCard 
                            key={location.id}
                            href={route('wizard.location.page', location.id)}
                            imageSrc={images[location.name]}
                        >
                            {location.name}
                        </WizardCard>
                    : null
                )}
            </div>

        </AuthenticatedLayout>
    );
}

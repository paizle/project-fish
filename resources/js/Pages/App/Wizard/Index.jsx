import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

import { Link } from '@inertiajs/react';

import './Wizard.scss'

import InteractiveNewBrunswickMap from '@/Components/InteractiveNewBrunswickMap/InteractiveNewBrunswickMap';

const images = {
    'Upper Saint John': '/images/upper-saint-john-map.png',
    'Southwest': '/images/south-west-saint-john-map.png'
}

export default function Index({ locations }) {

    return (
        <AppLayout>
            <Head title="Project: FISH" />

            <div className="p-8">
                <InteractiveNewBrunswickMap locations={locations} />
            </div>

        </AppLayout>
    );
}

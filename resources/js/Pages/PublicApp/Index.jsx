import './Index.scss'

import PublicAppLayout from './Layout/PublicAppLayout';
import PublicAppMenu from './Layout/PublicAppMenu';
import { Head } from '@inertiajs/react';

import Map from './Pages/Map/Map';
import InternalRouter, { BreadCrumb } from './Components/InternalRouter/InternalRouter';

import { InternalRouterProvider, InternalLink } from './Components/InternalRouter/InternalRouter'

import Location from './Pages/Location/Location'
import Water from './Pages/Water/Water'

export default function Index({ locations }) {

    //const test = route('publicApp.limitsByLocation.rest')

    const internalRouterConfig = {
        defaultViewName:'map',
        breadCrumb: [{name: 'map', content: 'New Brunswick'}]
    }

    return (
        <InternalRouterProvider config={internalRouterConfig}>

            <PublicAppLayout>
                { /* <Head title="Project: FISH" /> */ }
                <header>
                    <PublicAppMenu />
                    <BreadCrumb />
                </header>
                
                <main>
                    <InternalRouter>
                        {{
                            'map': (params) => <Map locations={locations} />,
                            'location' : (params) => <Location {...params} route={api.limitsByLocation}  />,
                            'water' : (params) => <Water {...params} route={api.limitsByWater} />
                        }}
                    </InternalRouter>
                </main>
            </PublicAppLayout>
            
                
        </InternalRouterProvider>
    )
}


const api = {
    limitsByLocation: (id, waterNameQuery) => {
        return route('publicApp.limitsByLocation.rest', id, {waterNameQuery})
    },
    limitsByWater: (id, fishNameQuery) => {
        return route('publicApp.limitsByWater.rest', id, {fishNameQuery})
    }
}
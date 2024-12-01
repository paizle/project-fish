import './Index.scss'

import React from 'react'

import PublicAppLayout from './Layout/PublicAppLayout';
import PublicAppMenu from './Layout/PublicAppMenu';
import { Head } from '@inertiajs/react';
import useScreenOrientation from '@/Hooks/useScreenOrientation';

import InternalRouter, { BreadCrumb, InternalRouterProvider, InternalLink, useInternalRouting } from './Components/InternalRouter/InternalRouter';

import Map from './Pages/Map/Map';

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
                
                {/*
                    <div className="loader">
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                        <div className="bubble"></div>
                    </div>
                    )}
                */}

                <main>
                    <InternalRouter>
                        {{
                            'map': (params) => <Map locations={locations} {...params} />,
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
        return route('public-app.limitsByLocation.rest', id, {waterNameQuery})
    },
    limitsByWater: (id, fishNameQuery) => {
        return route('public-app.limitsByWater.rest', id, {fishNameQuery})
    }
}
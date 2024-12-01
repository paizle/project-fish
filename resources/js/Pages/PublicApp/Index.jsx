import './Index.scss'

import React from 'react'

import PublicAppLayout from './Layout/PublicAppLayout';
import PublicAppMenu from './Layout/PublicAppMenu';
import { Head } from '@inertiajs/react';

import Map from './Pages/Map/Map';
import InternalRouter, { BreadCrumb, InternalRouterProvider, InternalLink, useInternalRouting } from './Components/InternalRouter/InternalRouter';

import Location from './Pages/Location/Location'
import Water from './Pages/Water/Water'

export default function Index({ locations }) {

    //const test = route('publicApp.limitsByLocation.rest')

    const internalRouterConfig = {
        defaultViewName:'map',
        breadCrumb: [{name: 'map', content: 'New Brunswick'}]
    }

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        setIsMobile(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()));
    }, []);

    
    const orientation = useScreenOrientation();
    console.log({orientation}, {isMobile})

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
                                'map': (params) => <Map locations={locations} {...params} isPortrait={orientation.isPortrait} />,
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

const useScreenOrientation = () => {
    const [orientation, setOrientation] = React.useState(window.screen.orientation.type)
  
    React.useEffect(() => {
      const handleOrientationChange = () => {
        console.log('heloooooo')
        setOrientation(window.screen.orientation.type);
      };
  
      const screenOrientation = window.screen.orientation;
  
      // Add event listener for orientation changes
      screenOrientation.addEventListener("change", handleOrientationChange);
  
      return () => {
        // Remove the event listener on cleanup
        screenOrientation.removeEventListener("change", handleOrientationChange);
      };
    }, [])

    const value = {
        orientation,
        isPortrait: orientation?.includes('portrait'),
        isLandscape: orientation?.includes('landscape')
    }
  
    return value
}
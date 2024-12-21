import React from 'react';

import { useInternalRouting } from '../../Components/InternalRouter/InternalRouter';

import useScreenOrientation from '@/Hooks/useScreenOrientation';
import MapMobile from './MapMobile';
import MapWeb from './MapWeb';

export default function Map({ locations }) {

    locations = locations.map((location) => {
        location.hasData = ['Lower Saint John', 'Southwest'].includes(location.name)
        return location
    })

    const internalRouting = useInternalRouting();
    React.useEffect(() => {
        internalRouting.setLoading(false);
    }, []);

    const screenOrientation = useScreenOrientation();

    return screenOrientation.isPortrait ? (
        <MapMobile locations={locations} />
    ) : (
        <MapWeb locations={locations} />
    );
}

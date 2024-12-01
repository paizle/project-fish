import React from 'react'

import { InternalLink, useInternalRouting } from '../../Components/InternalRouter/InternalRouter';

import {pathSelectorToLocationName} from "@/Components/NewBrunswickMap/NewBrunswickMap"
import NewBrunswickMapWeb from "@/Components/NewBrunswickMap/NewBrunswickMapWeb"
import NewBrunswickMapMobile from "@/Components/NewBrunswickMap/NewBrunswickMapMobile"

import MapWeb from './MapWeb'
import MapMobile from './MapMobile'

export default function Map({locations, isPortrait}) {

    const internalRouting = useInternalRouting()
    React.useEffect(() => {
        internalRouting.setLoading(false)
    }, [])

    return isPortrait
        ? <MapMobile locations={locations} />
        : <MapWeb locations={locations} />
    
}
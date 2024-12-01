import React from 'react'

import { InternalLink, useInternalRouting } from '../../Components/InternalRouter/InternalRouter';

import {pathSelectorToLocationName} from "@/Components/NewBrunswickMap/NewBrunswickMap"
import NewBrunswickMapWeb from "@/Components/NewBrunswickMap/NewBrunswickMapWeb"
import NewBrunswickMapMobile from "@/Components/NewBrunswickMap/NewBrunswickMapMobile"

import MapWeb from './MapWeb'
import MapMobile from './MapMobile'
import useScreenOrientation from '@/Hooks/useScreenOrientation';

export default function Map({locations, isPortrait, isMobile}) {

    const internalRouting = useInternalRouting()
    React.useEffect(() => {
        internalRouting.setLoading(false)
    }, [])

    const screenOrientation = useScreenOrientation()

    return screenOrientation.isPortrait
        ? <MapMobile locations={locations} />
        : <MapWeb locations={locations} />
    
}
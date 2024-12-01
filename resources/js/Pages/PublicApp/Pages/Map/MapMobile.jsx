import React from 'react'
import './MapMobile.scss'

import { InternalLink, useInternalRouting } from '../../Components/InternalRouter/InternalRouter';

import {pathSelectorToLocationName} from "@/Components/NewBrunswickMap/NewBrunswickMap"
import NewBrunswickMapMobile from "@/Components/NewBrunswickMap/NewBrunswickMapMobile"

export default function Map({locations, isPortrait}) {

    const containerRef = React.useRef(null)
    const locationTitlesRef = React.useRef(null)

    const [selectedLocation, setSelectedLocation] = React.useState(false)

    const locationsIndexed = locations.reduce((a, e) => {
        a[e.name] = e
        return a
    }, {})

    const getLocationFromPathId = (pathId) => {
        const name = pathSelectorToLocationName[pathId]
        const location = locationsIndexed[name]
        return location
    }

    function closeLocation(event) {
        onTouchLocation(null, '')
    }

    function onTouchLocation(event, pathId) {

        console.log('test')
        
        locationTitlesRef.current.querySelectorAll('.highlighted')
            .forEach((element) => element.classList.remove('highlighted'))
        
        if (pathId) {
            locationTitlesRef.current.classList.add('selected')
            const title = locationTitlesRef.current.querySelector(`[data-path-id=${pathId}]`)
            title.classList.add('highlighted')
            setSelectedLocation(true)
        } else {
            locationTitlesRef.current.classList.remove('selected')
            setSelectedLocation(false)
        }
        
        
    }

    return (
        <div className={`MapMobile portrait ${selectedLocation ? 'selected-location' : null}`}>
            
            <div className="container">

            <NewBrunswickMapMobile
                containerRef={containerRef}
                onTouchLocation={onTouchLocation}
            />
            
            <div className="locations" ref={locationTitlesRef}>
                <button className="close" onClick={closeLocation}>X</button>
                <ul>
                    {Object.keys(pathSelectorToLocationName).map((key) => (
                        <li key={key} data-path-id={key}>
                            <InternalLink
                                name='location'
                                params={{ id: getLocationFromPathId(key).id }}
                                breadCrumb={{position: 1, label: locationsIndexed?.[pathSelectorToLocationName[key]].name}}
                            >
                                <h3>{pathSelectorToLocationName[key]}</h3>
                                <em>
                                    {locationsIndexed?.[pathSelectorToLocationName[key]]?.description}
                                </em>
                            </InternalLink>
                        </li>
                    ))}
                </ul>
            </div>

            </div>

        </div>
    )
}
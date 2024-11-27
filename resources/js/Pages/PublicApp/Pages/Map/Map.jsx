import React from 'react'
import './Map.scss'

import { InternalLink } from '../../Components/InternalRouter/InternalRouter';

import NewBrunswickMap, {pathSelectorToLocationName} from "@/Components/NewBrunswickMap/NewBrunswickMap"


export default function Map({locations}) {

    const mapRef = React.useRef(null)
    const locationTitlesRef = React.useRef(null)

    const locationsIndexed = locations.reduce((a, e) => {
        a[e.name] = e
        return a
    }, {})

    const getLocationFromPathId = (pathId) => {
        const name = pathSelectorToLocationName[pathId]
        const location = locationsIndexed[name]
        return location
    }

    React.useEffect(() => {

    }, [mapRef.current])

    return (
        <div className="Map">

            <NewBrunswickMap 
                mapRef={mapRef}
                onMouseEnterLocation={(event, pathId) => {
                    const title = locationTitlesRef.current.querySelector(`[data-path-id=${pathId}]`)
                    title.classList.add('highlighted')
                }}
                onMouseLeaveLocation={(event, pathId) => {
                    const title = locationTitlesRef.current.querySelector(`[data-path-id=${pathId}]`)
                    title.classList.remove('highlighted')
                }}
                onClickLocation={(event, pathId) => {
                    const title = locationTitlesRef.current.querySelector(`[data-path-id=${pathId}]`)
                    title.querySelector('.InternalLink').click()
                }}
            />

            <div className="locations" ref={locationTitlesRef}>
                <ul>
                    {Object.keys(pathSelectorToLocationName).map((key) => (
                        <li key={key} data-path-id={key}>
                            <InternalLink
                                name='location'
                                params={{ id: getLocationFromPathId(key).id }}
                                breadCrumb={{position: 1, label: locationsIndexed?.[pathSelectorToLocationName[key]].name}}
                                onMouseEnter={(event) => {
                                    
                                    if (mapRef.current) {
                                        const location = mapRef.current.querySelector(`[id=${key}]`)
                                        location.classList.add('active')
                                    }
                                }}
                                onMouseLeave={(event) => {
                                    if (mapRef.current) {
                                        const location = mapRef.current.querySelector(`[id=${key}]`)
                                        location.classList.remove('active')
                                    }
                                }}
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
    )
}
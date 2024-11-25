import React from 'react'
import './InteractiveNewBrunswickMap.scss'

import { Link } from '@inertiajs/react';

import NewBrunswickMap, {pathSelectorToLocationName} from "../NewBrunswickMap/NewBrunswickMap"

export default function InteractiveNewBrunswickMap({locations}) {

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

    return (
        <div className="InteractiveNewBrunswickMap">

            <NewBrunswickMap 
                onMouseEnterLocation={(event, pathId) => {
                    const title = locationTitlesRef.current.querySelector(`[data-path-id=${pathId}]`)
                    title.classList.add('highlighted')
                }}
                onMouseLeaveLocation={(event, pathId) => {
                    const title = locationTitlesRef.current.querySelector(`[data-path-id=${pathId}]`)
                    title.classList.remove('highlighted')
                }}
                onClickLocation={(event, pathId) => {
                    const href = route('wizard.location.page', getLocationFromPathId(pathId).id)
                    locationTitlesRef.current.querySelector(`[href="${href}"]`).click()
                }}
            />

            <div className="locations" ref={locationTitlesRef}>
                <ul>
                    {Object.keys(pathSelectorToLocationName).map((key) => (
                        <li key={key} data-path-id={key}>
                            <Link href={route('wizard.location.page', getLocationFromPathId(key).id)}>
                                <h3>{pathSelectorToLocationName[key]}</h3>
                                <em>
                                    {locationsIndexed?.[pathSelectorToLocationName[key]]?.description}
                                </em>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
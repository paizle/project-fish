import React, {useState, useEffect, useRef} from 'react';
import './MapMobile.scss';

import { InternalLink, useInternalRouting } from '../../Components/InternalRouter/InternalRouter';

import { pathSelectorToLocationName } from '@/Components/NewBrunswickMap/NewBrunswickMap';
import NewBrunswickMapMobile from '@/Components/NewBrunswickMap/NewBrunswickMapMobile';

import { ArrowRightCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

export default function MapMobile({ locations }) {
    const internalRouting = useInternalRouting()
    const containerRef = useRef(null);
    const locationTitlesRef = useRef(null);

    const [selectedPathId, setSelectedPathId] = useState(null);
    const selectedPathIdRef = useRef(selectedPathId);

    useEffect(() => {
        selectedPathIdRef.current = selectedPathId;
    }, [selectedPathId]);

    const locationsIndexed = locations.reduce((a, e) => {
        a[e.name] = e;
        return a;
    }, {});

    const getLocationFromPathId = (pathId) => {
        const name = pathSelectorToLocationName[pathId];
        const location = locationsIndexed[name];
        return location;
    };

    function closeLocation(event) {
        onTouchLocation(null, '');
    }

    const onTouchLocation = (event, pathId) => {

        if (selectedPathIdRef?.current === pathId) {
            const location = getLocationFromPathId(pathId)
            internalRouting.setView('location', {
                id: location.id,
                breadCrumb: {
                    position: 1,
                    label: location.name,
                }
            })
            
            internalRouting.updateBreadCrumb(1, {
                        name: 'location',
                        params: {id: location.id},
                        content: location.name,
                    });
                
        }

        locationTitlesRef.current
            .querySelectorAll('.highlighted')
            .forEach((element) => element.classList.remove('highlighted'));

        if (pathId) {
            locationTitlesRef.current.classList.add('selected');
            const title = locationTitlesRef.current.querySelector(
                `[data-path-id=${pathId}]`,
            );
            title.classList.add('highlighted');
            setSelectedPathId(pathId)
        } else {
            locationTitlesRef.current.classList.remove('selected');
            setSelectedPathId(null)
        }
    }

    return (
        <div
            className={`MapMobile portrait ${selectedPathId ? 'selected-location' : ''}`}
        >
            <div className="container">
                <NewBrunswickMapMobile
                    containerRef={containerRef}
                    onTouchLocation={onTouchLocation}
                />

                <div className="locations" ref={locationTitlesRef}>
                    <button className="close" onClick={closeLocation}>
                        <XCircleIcon />
                    </button>
                    <ul>
                        {Object.keys(pathSelectorToLocationName).map((key) => (
                            <li key={key} data-path-id={key}>
                                <InternalLink
                                    name="location"
                                    onClick={(event) => {
                                        if (!locationsIndexed?.[pathSelectorToLocationName[key]]?.hasData) {
                                            event.preventDefault()
                                            return false
                                        }
                                    }}
                                    params={{
                                        id: getLocationFromPathId(key).id,
                                    }}
                                    breadCrumb={{
                                        position: 1,
                                        label: locationsIndexed?.[
                                            pathSelectorToLocationName[key]
                                        ].name,
                                    }}
                                >
                                    <h3>{pathSelectorToLocationName[key]}</h3>
                                    <em>
                                        {
                                            !locationsIndexed?.[
                                                pathSelectorToLocationName[key]
                                            ]?.hasData && (<strong>(no data)</strong>)
                                        }
                                        {
                                            locationsIndexed?.[
                                                pathSelectorToLocationName[key]
                                            ]?.description
                                        }
                                    </em>
                                </InternalLink>
                            </li>
                        ))}
                    </ul>
                    {selectedPathId && <InternalLink
                            className="go"
                            name="location"
                            params={{
                                id: getLocationFromPathId(selectedPathId).id,
                            }}
                            breadCrumb={{
                                position: 1,
                                label: locationsIndexed?.[
                                    pathSelectorToLocationName[selectedPathId]
                                ].name,
                            }}
                        >
                            {locationsIndexed?.[
                                    pathSelectorToLocationName[selectedPathId]
                                ].hasData
                                    ? <ArrowRightCircleIcon />
                                    : null
                                
                            }
                            </InternalLink>
                    }
                </div>
            </div>
        </div>
    );
}

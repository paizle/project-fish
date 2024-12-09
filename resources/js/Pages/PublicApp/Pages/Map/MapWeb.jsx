import React from 'react';
import './MapWeb.scss';

import {
    InternalLink,
    useInternalRouting,
} from '../../Components/InternalRouter/InternalRouter';

import { pathSelectorToLocationName } from '@/Components/NewBrunswickMap/NewBrunswickMap';
import NewBrunswickMapWeb from '@/Components/NewBrunswickMap/NewBrunswickMapWeb';

export default function MapWeb({ locations }) {
    const containerRef = React.useRef(null);
    const locationTitlesRef = React.useRef(null);

    const locationsIndexed = locations.reduce((a, e) => {
        a[e.name] = e;
        return a;
    }, {});

    const getLocationFromPathId = (pathId) => {
        const name = pathSelectorToLocationName[pathId];
        const location = locationsIndexed[name];
        return location;
    };

    const internalRouting = useInternalRouting();
    React.useEffect(() => {
        internalRouting.setLoading(false);
    }, []);

    return (
        <div className="MapWeb">
            <NewBrunswickMapWeb
                containerRef={containerRef}
                onMouseEnterLocation={(event, pathId) => {
                    const title = locationTitlesRef.current.querySelector(
                        `[data-path-id=${pathId}]`,
                    );
                    title.classList.add('highlighted');
                    console.log('enter');
                }}
                onMouseLeaveLocation={(event, pathId) => {
                    const title = locationTitlesRef.current.querySelector(
                        `[data-path-id=${pathId}]`,
                    );
                    title.classList.remove('highlighted');
                    console.log('leave');
                }}
                onClickLocation={(event, pathId) => {
                    if (locationTitlesRef.current) {
                        const title = locationTitlesRef.current.querySelector(
                            `[data-path-id=${pathId}]`,
                        );
                        title.querySelector('.InternalLink').click();
                        console.log('click');
                    }
                }}
            />

            <div className="locations" ref={locationTitlesRef}>
                <ul>
                    {Object.keys(pathSelectorToLocationName).map((key) => (
                        <li key={key} data-path-id={key}>
                            <InternalLink
                                name="location"
                                params={{ id: getLocationFromPathId(key).id }}
                                breadCrumb={{
                                    position: 1,
                                    label: locationsIndexed?.[
                                        pathSelectorToLocationName[key]
                                    ].name,
                                }}
                                onMouseEnter={(event) => {
                                    if (containerRef.current) {
                                        const location =
                                            containerRef.current.querySelector(
                                                `[id=${key}]`,
                                            );
                                        location.classList.add('active');
                                    }
                                }}
                                onMouseLeave={(event) => {
                                    if (containerRef.current) {
                                        const location =
                                            containerRef.current.querySelector(
                                                `[id=${key}]`,
                                            );
                                        location.classList.remove('active');
                                    }
                                }}
                            >
                                <h3>{pathSelectorToLocationName[key]}</h3>
                                <em>
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
            </div>
        </div>
    );
}

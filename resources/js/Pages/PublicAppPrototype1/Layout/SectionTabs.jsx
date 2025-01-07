import React from 'react'

import {
    InternalLink,
    useInternalRouting,
} from '../Components/InternalRouter/InternalRouter'

export default function SectionTabs({ children }) {
    const routing = useInternalRouting()

    let selectedTab = ''

    if (['fishes'].includes(routing.view.viewName)) {
        selectedTab = 'By Fish'
    } else {
        selectedTab = 'By Location'
    }

    return (
        <nav className="SectionTabs">
            <div className={`tab ${selectedTab === 'By Fish' && 'selected'}`}>
                <div className="tab-inner">
                    <InternalLink name="fishes" breadCrumb={null}>
                        By Fish
                    </InternalLink>
                </div>
            </div>
            <div
                className={`tab ${selectedTab === 'By Location' && 'selected'}`}
            >
                <div className="tab-inner">
                    <InternalLink name="map" breadCrumb={null}>
                        By Location
                    </InternalLink>
                </div>
            </div>
        </nav>
    )
}

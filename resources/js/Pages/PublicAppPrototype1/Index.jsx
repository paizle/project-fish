import './Index.scss'

import PublicAppPrototype1Layout from './Layout/PublicAppPrototype1Layout'
import PublicAppMenu from './Layout/PublicAppMenu'
import SectionTabs from './Layout/SectionTabs'

import InternalRouter, {
    BreadCrumb,
    InternalRouterProvider,
} from './Components/InternalRouter/InternalRouter'

import Map from './Pages/Map/Map'
import Location from './Pages/Location/Location'
import Water from './Pages/Water/Water'
import Fishes from './Pages/Fishes/Fishes'
import LimitsByFish from './Pages/LimitsByFish/LimitsByFish'

export default function Index({ locations }) {
    const internalRouterConfig = {
        defaultViewName: 'fishes',
        defaultBreadCrumb: [{ name: 'map', content: 'New Brunswick' }],
        breadCrumb: [{ name: 'map', content: 'New Brunswick' }],
    }

    return (
        <InternalRouterProvider config={internalRouterConfig}>
            <PublicAppPrototype1Layout>
                {/* <Head title="Project: FISH" /> */}
                <header>
                    <PublicAppMenu />
                    <SectionTabs />
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
                            map: (params) => (
                                <Map locations={locations} {...params} />
                            ),
                            location: (params) => (
                                <Location
                                    {...params}
                                    route={api.limitsByLocation}
                                />
                            ),
                            water: (params) => (
                                <Water {...params} route={api.limitsByWater} />
                            ),
                            fishes: (params) => (
                                <Fishes {...params} route={api.fishes} />
                            ),
                            limitsByFish: (params) => (
                                <LimitsByFish
                                    {...params}
                                    route={api.limitsByFish}
                                />
                            ),
                        }}
                    </InternalRouter>
                </main>
            </PublicAppPrototype1Layout>
        </InternalRouterProvider>
    )
}

const api = {
    limitsByLocation: (id, waterNameQuery) => {
        return route('public-app.limitsByLocation.rest', id, {
            waterNameQuery,
        })
    },
    limitsByWater: (id, fishNameQuery) => {
        return route('public-app.limitsByWater.rest', id, { fishNameQuery })
    },
    fishes: () => {
        return route('public-app.fishes.rest')
    },
    limitsByFish: (id) => {
        return route('public-app.limitsByFish.rest', id)
    },
}

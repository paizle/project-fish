import './Index.scss';

import PublicAppLayout from './Layout/PublicAppLayout';
import PublicAppMenu from './Layout/PublicAppMenu';

import InternalRouter, {
    BreadCrumb,
    InternalRouterProvider,
} from './Components/InternalRouter/InternalRouter';

import Map from './Pages/Map/Map';
import Location from './Pages/Location/Location';
import Water from './Pages/Water/Water';

export default function Index({ locations }) {

    const internalRouterConfig = {
        defaultViewName: 'map',
        breadCrumb: [{ name: 'map', content: 'New Brunswick' }],
    };

    return (
        <InternalRouterProvider config={internalRouterConfig}>
            <PublicAppLayout>
                {/* <Head title="Project: FISH" /> */}
                <header>
                    <PublicAppMenu />
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
                        }}
                    </InternalRouter>
                </main>
            </PublicAppLayout>
        </InternalRouterProvider>
    );
}

const api = {
    limitsByLocation: (id, waterNameQuery) => {
        return route('public-app.limitsByLocation.rest', id, {
            waterNameQuery,
        });
    },
    limitsByWater: (id, fishNameQuery) => {
        return route('public-app.limitsByWater.rest', id, { fishNameQuery });
    },
};

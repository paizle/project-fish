import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BreadCrumb from './Partials/BreadCrumb/Breadcrumb';

import './Wizard.scss';

export default function FishCategory({ fishLimits, wizardBreadcrumb }) {
    return (
        <AuthenticatedLayout>
            <Head title="Project: FISH" />

            <BreadCrumb breadCrumb={wizardBreadcrumb} />

            <div className="box mx-4">
                <div
                    className="data-grid"
                    style={{
                        'grid-template-columns':
                            'auto auto auto auto auto auto auto',
                    }}
                >
                    <div className="header">
                        <div>
                            Fish (<em>method</em>)
                        </div>
                        <div>Water Body</div>
                        <div>Season Start</div>
                        <div>Season End</div>
                        <div>Bag Limit</div>
                        <div>Min. Size</div>
                        <div>Max. Size</div>
                    </div>
                    {fishLimits.map((fishLimit) => (
                        <>
                            <div class="row-start">
                                {fishLimit.fish.name}
                                {fishLimit.fishing_method ? (
                                    <em>{` (${fishLimit.fishing_method.name})`}</em>
                                ) : null}
                            </div>
                            <div>{renderWaters(fishLimit)}</div>
                            <div>{fishLimit.season_start || ''}</div>
                            <div>{fishLimit.season_end || ''}</div>
                            <div>{fishLimit.bag_limit || ''}</div>
                            <div>{fishLimit.minimum_size || 'N/A'}</div>
                            <div>{fishLimit.maximum_size || 'N/A'}</div>
                        </>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function renderWaters(fishLimit) {
    let result = null;

    if (fishLimit.water) {
        if (fishLimit.boundary) {
            if (fishLimit.tidal_category) {
                return (
                    <>
                        {fishLimit.water.name}{' '}
                        <em>
                            {fishLimit.boundary.name},{' '}
                            {fishLimit.tidal_category.name}
                        </em>
                    </>
                );
            } else {
                return (
                    <>
                        {fishLimit.water.name}{' '}
                        <em>({fishLimit.boundary.name})</em>
                    </>
                );
            }
        } else {
            return <>{fishLimit.water.name}</>;
        }
    } else {
        if (fishLimit.boundary) {
            if (fishLimit.tidal_category) {
                return (
                    <>
                        <em>
                            {fishLimit.boundary.name},{' '}
                            {fishLimit.tidal_category.name}
                        </em>
                    </>
                );
            } else {
                return (
                    <>
                        <em>{fishLimit.boundary.name}</em>
                    </>
                );
            }
        } else {
            if (fishLimit.tidal_category) {
                return (
                    <>
                        <em>{fishLimit.tidal_category.name}</em>
                    </>
                );
            }
        }
    }

    return <strong>All</strong>;
}

function renderRow(limit) {
    return (
        <>
            <div>{limit.fish.name}</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div> 6</div>
        </>
    );
}

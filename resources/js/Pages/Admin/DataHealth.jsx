import PieChartCompleteness from '@/Components/PieChartCompleteness/PieChartCompleteness';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AdminSubMenu from './partials/AdminSubMenu';

export default function Edit({ locations }) {
    const sectionStatus = {
        'Lower Saint John': {
            hasData: true,
        },
        Southwest: {
            hasData: true,
        },
    };

    const locationsHavingData = locations.filter((location) => {
        return sectionStatus?.[location.name]?.hasData;
    });

    return (
        <AuthenticatedLayout header={<AdminSubMenu />}>
            <Head title="Project: FISH" />

            <div className="box">
                <h1>Progress of Data Mining sections from the PDF</h1>

                <div className="">
                    <h3>
                        Locations with Data: {locationsHavingData.length} of{' '}
                        {locations.length}
                    </h3>

                    <PieChartCompleteness
                        complete={locationsHavingData}
                        incomplete={locations.filter(
                            (e) => !locationsHavingData.includes(e),
                        )}
                    />

                    <h4>
                        <span>Next Section to complete: </span>
                        <strong>Upper Saint John</strong>
                    </h4>
                </div>

                <h3>
                    Data to be verified: {locationsHavingData.length} of{' '}
                    {locationsHavingData.length}
                </h3>
                <div className="flex justify-center">
                    <PieChartCompleteness
                        complete={[]}
                        incomplete={locationsHavingData}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

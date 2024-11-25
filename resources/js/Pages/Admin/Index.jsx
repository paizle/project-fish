import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

import AdminSubmenu from './Partials/AdminSubmenu';
import PieChartCompleteness from '@/Components/PieChartCompleteness/PieChartCompleteness';

export default function Edit({locations}) {

    const sectionStatus = {
        'Upper Saint John': {
            hasData: true,
        },
        'Southwest': {
            hasData: true,
        }
    }

    const locationsHavingData = locations.filter((location) => {
        return sectionStatus?.[location.name]?.hasData
    })

    return (
        <AppLayout
            header={
                <div className="flex">
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <AdminSubmenu />
                    </div>
                </div>
            }
        >
            <Head title="Project: FISH" />

            <div className="py-12">
                <div className="box mx-8">
                    <h1>Progress of Data Mining sections from the PDF</h1>

                    <h3>Locations with Data: {locationsHavingData.length} of {locations.length}</h3>
                    
                    <div className="flex justify-center">
                        <div className="flex">
                            <PieChartCompleteness complete={locationsHavingData} incomplete={locations.filter((e) => !locationsHavingData.includes(e))} />
                            <div>
                                <h4>Next Section to complete: <strong>Lower Saint John</strong></h4>
                            </div>
                        </div>
                    </div>
                    <h3>Data to be verified: {locationsHavingData.length} of {locationsHavingData.length}</h3>
                    <div className="flex justify-center">
                    
                    <PieChartCompleteness complete={[]} incomplete={locationsHavingData} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

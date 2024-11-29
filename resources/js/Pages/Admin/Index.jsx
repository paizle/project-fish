import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
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
        <AuthenticatedLayout>
            <Head title="Project: FISH" />

            <div className="py-12">
                <div className="box mx-8">
                    <h1>Progress of Data Mining sections from the PDF</h1>

                    <h3>Locations with Data: {locationsHavingData.length} of {locations.length}</h3>
                    
                    <div className="flex justify-center">
                        <div className="flex flex-wrap">
                            <PieChartCompleteness complete={locationsHavingData} incomplete={locations.filter((e) => !locationsHavingData.includes(e))} />
                            
                            <h4><span>Next Section to complete: </span><strong>Lower Saint John</strong></h4>
                            
                        </div>
                    </div>
                    <h3>Data to be verified: {locationsHavingData.length} of {locationsHavingData.length}</h3>
                    <div className="flex justify-center">
                    
                    <PieChartCompleteness complete={[]} incomplete={locationsHavingData} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

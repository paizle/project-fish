import { Link } from '@inertiajs/react';
import './BreadCrumb.scss';

export default function BreadCrumb({ breadCrumb }) {
    return (
        <div className="BreadCrumb">
            <Link href={route('wizard.page')} className="item">
                Choose Location
            </Link>
            {Object.keys(breadCrumb).map((key, index, array) =>
                index === array.length - 1 ? (
                    <div key={key} className="item">
                        {key}
                    </div>
                ) : (
                    <Link key={key} href={breadCrumb[key]} className="item">
                        {key}
                    </Link>
                ),
            )}
        </div>
    );
}

import { Link } from '@inertiajs/react';
import './WizardCard.scss'

export default function Card({href, imageSrc, objectFit = null, children}) {
    
    const style = objectFit ? {'objectFit': objectFit} : null
    
    return (
        
        <Link
            style={style}
            className="WizardCard max-w-md text-center bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
            href={href}>
            { imageSrc 
                ? <img src={imageSrc} />
                : null
            }
                <div>{children}</div>
        </Link>
    
    )
}
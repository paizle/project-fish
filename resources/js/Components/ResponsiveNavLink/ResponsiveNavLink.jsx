import './ResponsiveNavLink.scss'
import { Link } from '@inertiajs/react'

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`ResponsiveNavLink ${active ? 'active' : ''} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    )
}

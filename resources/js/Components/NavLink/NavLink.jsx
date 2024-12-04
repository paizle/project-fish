import './NavLink.scss'
import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                className +
                ' NavLink inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none '
                + (active ? 'active text-gray-900' : null)
            }
        >
            {children}
        </Link>
    );
}

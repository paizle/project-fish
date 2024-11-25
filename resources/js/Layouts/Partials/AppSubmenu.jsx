
import NavLink from '@/Components/NavLink';

export default function AuthenticatedSubmenu() {

    return (
        <>
            <NavLink
                href={route('dashboard')}
                active={route().current('dashboard')}
            >
                Dashboard
            </NavLink>
            <NavLink
                href={route('profile.edit')}
                active={route().current('profile.edit')}
            >
                Profile
            </NavLink>
            <NavLink
                href={route('admin')}
                active={route().current('admin')}
            >
                Admin
            </NavLink>
            <NavLink
                href={route('fishLimits.page')}
                active={route().current('fishLimits.page')}
            >
                Fish Limits Data
            </NavLink>
            <NavLink
                href={route('data.index')}
                active={route().current('data.index') || route().current('data.*')}
            >
                Other Data
            </NavLink>
            
            <NavLink
                href={route('wizard.page')}
                active={route().current('wizard.*')}
            >
                Wizard
            </NavLink>
        </>
    )
}



import NavLink from '@/Components/NavLink';

export default function DataSubmenu() {

    return (
        <>
            <NavLink
                href={route('data.locations')}
                active={route().current('data.locations')}
            >
                Locations
            </NavLink>

            <NavLink
                href={route('data.fish-categories')}
                active={route().current('data.fish-categories')}
            >
                Fish Categories
            </NavLink>

            <NavLink
                href={route('data.fishes')}
                active={route().current('data.fishes')}
            >
                Fishes
            </NavLink>

            <NavLink
                href={route('data.boundaries')}
                active={route().current('data.boundaries')}
            >
                Boundaries
            </NavLink>

            <NavLink
                href={route('data.water-categories')}
                active={route().current('data.waterCategories')}
            >
                Water Categories
            </NavLink>

            <NavLink
                href={route('data.waters')}
                active={route().current('data.waters')}
            >
                Waters
            </NavLink>

            <NavLink
                href={route('data.limits')}
                active={route().current('data.limits')}
            >
                Limits
            </NavLink>
        </>
    )
}
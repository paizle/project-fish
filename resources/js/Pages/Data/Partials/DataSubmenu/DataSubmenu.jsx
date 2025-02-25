import NavLink from '@/Components/NavLink/NavLink'

export default function DataSubmenu() {
    return (
        <div className="sub-navigation">
            <NavLink
                href={route('data.locations')}
                active={route().current('data.locations')}
            >
                Regions
            </NavLink>

						<NavLink
                href={route('data.waters')}
                active={route().current('data.waters')}
            >
                Waters
            </NavLink>

            <NavLink
                href={route('data.fishes')}
                active={route().current('data.fishes')}
            >
                Fishes
            </NavLink>

        </div>
    )
}

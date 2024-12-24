import NavLink from '@/Components/NavLink/NavLink'
import NewIndicator from '@/Components/NewIndicator/NewIndicator'

export default function AdminSubMenu() {
    return (
        <div className="sub-navigation">
            <NavLink
                href={route('admin.data-health')}
                active={route().current('admin.data-health')}
            >
                Data Health
            </NavLink>

            <NavLink
                href={route('admin.style-guide')}
                active={route().current('admin.style-guide')}
            >
                Style Guide
            </NavLink>

            <NavLink
                href={route('admin.storybook')}
                active={route().current('admin.storybook')}
            >
                Storybook
            </NavLink>
        </div>
    )
}

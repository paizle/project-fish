import './InternalRouter.scss'
import React from 'react'
import { Link } from '@inertiajs/react'
import { HomeIcon } from '@heroicons/react/24/solid'

const InternalRouterContext = React.createContext()

export function InternalRouterProvider({ config, children = {} }) {
    const [breadCrumb, setBreadCrumb] = React.useState(config.breadCrumb)

    const [currentView, setCurrentView] = React.useState(
        config?.defaultViewName ?? null,
    )

    const [currentViewParams, setCurrentViewParams] = React.useState(null)

    const [loading, setLoading] = React.useState(true)

    const setView = (viewName, viewParams) => {
        setCurrentView(viewName)
        setCurrentViewParams(viewParams)
        setLoading(true)
    }

    const updateBreadCrumb = (position, internalLinkOptions = null) => {
        setBreadCrumb((breadCrumb) => {
            let newBreadCrumb = JSON.parse(JSON.stringify(breadCrumb))
            newBreadCrumb = newBreadCrumb.slice(0, position)
            newBreadCrumb[position] = internalLinkOptions
            return newBreadCrumb
        })
    }

    const value = {
        view: { viewName: currentView, viewParams: currentViewParams },
        setView,
        breadCrumb,
        updateBreadCrumb,
        setBreadCrumb,
        loading,
        setLoading,
    }

    return (
        <InternalRouterContext.Provider value={value}>
            {children}
        </InternalRouterContext.Provider>
    )
}

export default function InternalRouter({ defaultViewName, children }) {
    const routing = useInternalRouting()
    return renderChildren(children, routing)
}

export function BreadCrumb() {
    const routing = useInternalRouting()

    if (!routing?.breadCrumb || routing.breadCrumb.length === 0) {
        return null
    }

    return (
        <div className={`BreadCrumb depth-${routing.breadCrumb.length}`}>
            <Link href="/" className="icon">
                <HomeIcon />
            </Link>
            {routing.breadCrumb.map((item, index) => (
                <InternalLink
                    key={index}
                    name={item.name}
                    params={item?.params || null}
                    breadCrumb={{ position: index }}
                >
                    <span>{item.content}</span>
                </InternalLink>
            ))}
        </div>
    )
}

export function InternalLink({
    name,
    params = {},
    breadCrumb = null,
    children,
    onClick,
    ...rest
}) {
    const routing = useInternalRouting()

    const setView = () => {
        routing.setView(name, params)
        if (breadCrumb) {
            routing.updateBreadCrumb(breadCrumb.position, {
                name,
                params,
                content: breadCrumb.label || children,
            })
        }
    }

    return (
        <button
            className="InternalLink"
            onClick={(e) => {
                onClick?.(e)
                if (!e.isDefaultPrevented()) {
                    setView(name, params)
                }
            }}
            {...rest}
        >
            {children}
        </button>
    )
}

function renderChildren(children, routing) {
    return routing.view.viewName
        ? children[routing.view.viewName](routing.view.viewParams ?? {})
        : null
}

export const useInternalRouting = () => {
    return React.useContext(InternalRouterContext)
}

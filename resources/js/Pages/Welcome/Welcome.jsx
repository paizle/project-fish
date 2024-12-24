import './Welcome.scss'
import { useLayoutEffect, useRef } from 'react'
import { Head, Link } from '@inertiajs/react'
import { UserIcon, MapIcon } from '@heroicons/react/24/outline'

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const containerRef = useRef(null)

    useLayoutEffect(() => {
        setTimeout(() => {
            containerRef.current.classList.add('loaded')
        }, 500)
    }, [containerRef.current])

    return (
        <>
            <Head title="Welcome" />

            <div className="Welcome" ref={containerRef}>
                <div className="py-8">
                    <h1 className="py-8">Please Select</h1>

                    <div className="selection">
                        <Link href="/public-app">
                            <div className="box">
                                <MapIcon className="icon-color" />
                                <h3>Public App</h3>
                            </div>
                        </Link>
                        <div className="animate-bounce text-center">- or -</div>
                        <Link href="/dashboard">
                            <div className="box">
                                <UserIcon className="icon-color" />
                                <h3>Admin</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="m-8">
                    <h2 className="py-4 text-center">About</h2>
                    <p>
                        This web application is intended to provide publicly
                        available data regarding New Brunswick, Canada fishing
                        regulations in an easily navigatable and user friendly
                        format.
                    </p>
                    <p>
                        At this time, the data presented in this web application
                        is not intended to be used in any capactiy other than
                        demonstration.
                    </p>
                    <p>
                        Please feel free to view the{' '}
                        <Link href="/public-app">Public App</Link> or sign up
                        for an account to view the administrative back-end.
                    </p>
                </div>
            </div>
        </>
    )
}

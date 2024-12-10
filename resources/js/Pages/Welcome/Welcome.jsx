import './Welcome.scss'
import { useLayoutEffect, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
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
                        <Link href="/login">
                            <div className="box">
                                
                                <UserIcon className="icon-color" />
                                <h3>Admin</h3>
                            </div>
                        </Link>

                        <div className="text-center animate-bounce">- or -</div>

                        <Link href="/public-app">
                            <div className="box"> 
                                <MapIcon className="icon-color"  />
                                <h3>Public App</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

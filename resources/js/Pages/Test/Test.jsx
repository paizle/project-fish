import './Test.scss'
import DataTableWithOperations from '@/Components/DataTableWithOperations/DataTableWithOperations'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

import formatDate from '@/Util/formatDate'
import parseMySqlDate from '@/Util/parseMySqlDate'
import Tooltip from '@/Components/Tooltip/Tooltip'

import { Squares2X2Icon } from '@heroicons/react/24/outline'

export default function FishLimits({ fishes }) {
    const [view, setView] = useState(0)

    const views = ['one-up', 'two-up', 'three-up', 'four-up']

    const getFileName = (fishName) => {
        return fishName.toLowerCase().replaceAll(' ', '-') + '.png'
    }

    const changeView = (e) => {
        setView((oldView) => {
            let newView = oldView + 1
            if (newView === views.length) {
                newView = 0
            }
            return newView
        })
    }

    return (
        <AuthenticatedLayout>
            <div className="Test">
                <div className="box">
                    <div className="flex justify-end">
                        <button className="icon" onClick={changeView}>
                            <Squares2X2Icon />
                        </button>
                    </div>
                    <div class={`fishes ${views[view]}`}>
                        {fishes.map((fish) => (
                            <div>
                                <img
                                    src={`/images/fish/${getFileName(fish.name)}`}
                                />
                                <strong>{fish.name}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

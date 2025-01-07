import './Fishes.scss'
import React, { useState } from 'react'
import { Squares2X2Icon } from '@heroicons/react/24/outline'

import {
    InternalLink,
    useInternalRouting,
} from '../../Components/InternalRouter/InternalRouter'

export default function Fishes({ route }) {
    const [results, setResults] = React.useState([])

    const [columns, setColumns] = useState(1)

    const columnLayout = ['one-up', 'two-up', 'three-up', 'four-up']

    const internalRouting = useInternalRouting()
    React.useEffect(() => {
        internalRouting.setBreadCrumb([{ name: 'fishes', content: 'Fish' }])
        axios.get(route()).then((result) => {
            setResults(result.data.fishes ?? [])
        })
    }, [])

    const getFileName = (fishName) => {
        return fishName.toLowerCase().replaceAll(' ', '-') + '.png'
    }

    const changeColumns = (e) => {
        setColumns((oldColumns) => {
            let newColumns = oldColumns + 1
            if (newColumns === columnLayout.length) {
                newColumns = 0
            }
            return newColumns
        })
    }

    return (
        <div className="Fishes">
            <div className="fish-grid">
                <header>
                    <button
                        className="icon"
                        onClick={changeColumns}
                        title={columnLayout[columns]}
                    >
                        <Squares2X2Icon />
                    </button>
                </header>
                <div className="fish-grid-body">
                    <div className={`fish-list ${columnLayout[columns]}`}>
                        {results.map((fish) => (
                            <InternalLink
                                key={fish.name}
                                name="limitsByFish"
                                params={{ id: fish.id }}
                                breadCrumb={{
                                    position: 2,
                                    label: fish.name,
                                }}
                            >
                                <img
                                    src={`/images/fish/${getFileName(fish.name)}`}
                                />
                                <strong>{fish.name}</strong>
                            </InternalLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

import './Fishes.scss'
import React, {useState} from 'react'
import { Squares2X2Icon } from '@heroicons/react/24/outline'

import {
    InternalLink,
    useInternalRouting,
} from '../../Components/InternalRouter/InternalRouter'

export default function Fishes({ route }) {
    
    const [results, setResults] = React.useState([])

    const [columns, setColumns] = useState(0)
    
    const columnLayout = ['one-up', 'two-up', 'three-up', 'four-up']

    React.useEffect(() => {
        console.log({ route })

        axios.get(route()).then((result) => {
            setResults(result.data.fishes ?? [])
        })
    }, [])

    const getFileName = (fishName) => {
        return fishName
            .toLowerCase()
            .replaceAll(' ', '-')
            + '.png'
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
            <div className="flex justify-end">
                <button className="icon" onClick={changeColumns} title={columnLayout[columns]}>
                    <Squares2X2Icon />
                </button>
            </div>
            <div className={`fishes-list ${columnLayout[columns]}`}>
                {results.map((fish) => (
                    <InternalLink
                        key={fish.name}
                        name="limitsByFish"
                        params={{ id: fish.id }}
                        breadCrumb={{
                            position: 1,
                            label: fish.name,
                        }}
                    >
                        <img src={`/images/fish/${getFileName(fish.name)}`} />
                        <strong>{fish.name}</strong>
                    </InternalLink>
                ))}
            </div>
        </div>
    )
}

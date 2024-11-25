import React from 'react'
import NewBrunswickMapSvg from '../../../svgs/NewBrunswick.svg?react'
import './NewBrunswickMap.scss'

export const pathSelectorToLocationName = {
    'path102': 'Restigouche',
    'path47': 'Chaleur',
    'path53': 'Miramichi',
    'path55': 'Southeast',
    'path28': 'Inner Bay of Fundy',
    'path60': 'Lower Saint John',
    'path89': 'Southwest',
    'path62': 'Upper Saint John'
}

export default function NewBrunswickMap({
    onMouseEnterLocation = () => null, 
    onMouseLeaveLocation = () => null,
    onClickLocation = () => null
}) {

    const svgRef = React.createRef(null)

    React.useEffect(() => {
        if (svgRef.current) {
            const svg = svgRef.current.querySelector('svg')

            Object.keys(pathSelectorToLocationName).forEach((key) => {
                const locationPath = svg.querySelector('#' + key)
                locationPath.classList.add('location')
                locationPath.addEventListener('mouseenter', (event) => onMouseEnterLocation(event, key))
                locationPath.addEventListener('mouseleave', (event) => onMouseLeaveLocation(event, key))    
                locationPath.addEventListener('click', (event) => onClickLocation(event, key))
            })
        }
    }, [svgRef.current])

    return (
        <div ref={svgRef} className="NewBrunswickMap" >
            <NewBrunswickMapSvg />
        </div>
    )
}
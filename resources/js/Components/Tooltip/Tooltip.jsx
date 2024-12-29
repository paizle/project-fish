import React, { useState, useRef, useLayoutEffect } from 'react'
import './Tooltip.scss'

const Tooltip = ({ message, children }) => {

    const [hoverAndPosition, setHoverAndPosition] = useState({
        hover: false,
        flowLeft: false
    })

    const messageRef = useRef(null)
    
    function setIsHovering(value) {
        setHoverAndPosition(() => {
            return {
                hover: value,
                flowLeft: false
            }
        })
    }

    useLayoutEffect(() => {

        if (messageRef.current) {
            const bounds = messageRef.current.getBoundingClientRect()
            if (bounds.x + bounds.width > window.innerWidth) {
                setHoverAndPosition((hoverAndPosition) => {
                    return {
                        hover: hoverAndPosition.hover,
                        flowLeft: true
                    }
                })
            } else {
                setHoverAndPosition((hoverAndPosition) => {
                    return {
                        hover: hoverAndPosition.hover,
                        flowLeft: false
                    }
                })
            }
        }
    }, [hoverAndPosition.hover])
    
    return (
        <div className={`Tooltip ${hoverAndPosition.hover ? 'hovering' : ''}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            {children}
            <div 
                ref={messageRef}
                className={`message ${hoverAndPosition.flowLeft ? 'flow-left' : ''}`}
            >
                {message}
            </div>
        </div>
    )
}

export default Tooltip

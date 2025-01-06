import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import './Tooltip.scss'

const Tooltip = ({ message = null, containerRef = null, children }) => {
    
    const messageRef = useRef(null)

    const intersectionObserverRef = useRef(null)

    const [hover, setHover] = useState(false)
    const [flowLeft, setFlowLeft] = useState(false)

    const setIsHovering = (value) => (event) => {
        event.preventDefault()
        event.stopPropagation()
        setHover(value)
    }

    useLayoutEffect(() => {
        if (messageRef?.current && !intersectionObserverRef.current) {
            intersectionObserverRef.current = new IntersectionObserver((entries) => {
                //console.log('testing')
                entries.forEach((entry) => {
                    setFlowLeft((flowLeft) => flowLeft || entry.intersectionRatio < 1)
                  //console.log(entry.target, 'is fully visible:', entry.isIntersecting);
                  //console.log('Intersection ratio:', entry.intersectionRatio);
                });
              }, {
                root: containerRef?.current ?? null, // Replace with your container
                threshold: [0, .9] // Adjust thresholds as needed
              });
        }
    }, [messageRef?.current])

    useEffect(() => {
        if (messageRef.current && (!containerRef || containerRef?.current) && intersectionObserverRef?.current) {
            intersectionObserverRef.current.observe(messageRef.current)
        }
    }, [messageRef.current, containerRef, containerRef?.current, intersectionObserverRef?.current])

    useLayoutEffect(() => {
        if (containerRef?.current) {
            const computedStyles = getComputedStyle(containerRef.current)
            containerRef.current.style.overflow = 'hidden'
            containerRef.current.style.overflowX = 'hidden'
            containerRef.current.style.overflowY = 'hidden'
            
            setTimeout(() => {
                containerRef.current.style.overflow = ''
                containerRef.current.style.overflowX = ''
                containerRef.current.style.overflowY = ''
            }, 1)
            console.log(
                computedStyles.getPropertyValue('overflow'), 
                computedStyles.getPropertyValue('overflow-x'),
                computedStyles.getPropertyValue('overflow-y')
            )
        }

        setFlowLeft(false)
    }, [hover])


    return (
        <div
            className={`Tooltip ${hover && 'show'}`}
            onMouseEnter={setIsHovering(true)}
            onMouseLeave={setIsHovering(false)}
            onTouchStart={(e) => e.stopPropagation()}
        >
            {children}
            <div
                data-message={message}
                ref={messageRef}
                className={`message ${flowLeft && 'flow-left'}`}
            >
                <div className="message-content">{message}</div>
            </div>
        </div>
    )
}

export default Tooltip

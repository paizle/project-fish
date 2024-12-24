import React, { useState, useRef, useLayoutEffect } from 'react'
import './Tooltip.scss'

const Tooltip = ({ message, children }) => {
    return (
        <button className="Tooltip">
            {children}
            <div className="message">{message}</div>
        </button>
    )
}

export default Tooltip

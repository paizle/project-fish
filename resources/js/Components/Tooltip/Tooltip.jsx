import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.scss';

const Tooltip = ({ message, children, position = 'top', delay = 500 }) => {

  return (
    <button
      className="Tooltip"
    >
        {children}
        <div className="message">
            {message}
        </div>
    </button>
  );
};

export default Tooltip;
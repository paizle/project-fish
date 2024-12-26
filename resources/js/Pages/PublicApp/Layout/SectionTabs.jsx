import React from 'react'


export default function SectionTabs({ children }) {
    
    return (
        <nav className="SectionTabs">
            <div className="tab">
                <div className="tab-inner">
                    By Fish
                </div>
            </div>
            <div className="tab selected">
                <div className="tab-inner">
                    By Location
                </div>
            </div>
        </nav>
    )
}

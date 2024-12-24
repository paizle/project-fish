import { ResponsivePie } from '@nivo/pie'
import React from 'react'

export default function PercentagePieChart({
    caption = '',
    count = 1,
    of = 1,
    sectionsLeft = [],
}) {
    const [hoveredSlice, setHoveredSlice] = React.useState(null)

    // Calculate percentage and prepare data
    const percentage = ((of / count) * 100).toFixed(2)
    const data = [
        { id: 'Completed', value: count },
        { id: 'Remaining', value: of - count, label: '!!!' },
    ]

    data.push({
        id: 'Test',
        value: 1,
    })

    return (
        <div style={{ height: 400, textAlign: 'center' }}>
            <h3>{`${count} of ${of}${caption}`}</h3>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
                innerRadius={0.1} // Shrink donut hole on hover
                padAngle={1.5}
                cornerRadius={4}
                colors={{ scheme: 'set2' }}
                borderWidth={2}
                borderColor={{ from: 'color', modifiers: [['darker', 1]] }}
                enableArcLabels={false}
                enableArcLinkLabels={true}
                arcLabelsTextColor="#333"
                animate={true}
                //tooltip={() => null}
                valueFormat={(value) => `!${value}!`}
                onMouseEnter={(data, event) => setHoveredSlice(data.id)} // Track hovered slice
                onMouseLeave={() => setHoveredSlice(null)} // Reset hovered slice
                motionConfig="wobbly"
                arcLinkLabelsSkipAngle={1}
                arcLinkLabelsTextColor="#333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                activeInnerRadiusOffset={-5}
                activeOuterRadiusOffset={15}
                activeBorderWidth={3}
                activeId={hoveredSlice}
                defs={[
                    {
                        id: 'hoverPattern',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(0, 0, 0, 0.1)',
                        size: 1,
                        padding: 1,
                        stagger: true,
                    },
                ]}
                fill={
                    hoveredSlice
                        ? [{ match: { id: hoveredSlice }, id: 'hoverPattern' }]
                        : []
                }
            />
        </div>
    )
}

import { ResponsivePie } from '@nivo/pie';
import React from 'react';

export default function PieChartCompleteness({ complete, incomplete }) {
    const [hoveredSlice, setHoveredSlice] = React.useState(null);

    const data = [];

    data.push(
        ...complete.map((e) => ({
            id: e.name,
            value: 1,
            label: 'completed',
        })),
    );

    data.push({
        id: 'Incomplete',
        value: incomplete.length,
        label: incomplete.map((e) => e.name).join('<br />'),
    });

    return (
        <div style={{ height: 300, width: '100%', textAlign: 'center' }}>
            <ResponsivePie
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
                tooltip={renderTooltip}
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
    );
}

function renderTooltip({ datum }) {
    return (
        <div className="rounded-md bg-white p-4 shadow">
            <strong>{datum.id}</strong>
            {datum.label ? (
                <>
                    :<br />
                    <div dangerouslySetInnerHTML={{ __html: datum.label }} />
                </>
            ) : null}
        </div>
    );
}

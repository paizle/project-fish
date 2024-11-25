import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

export default function SimplePieChart({ count=1, number=1 }) {
    const [activeIndex, setActiveIndex] = React.useState(null);
  
    // Calculate the percentage
    const percentage = ((number / count) * 100).toFixed(2);
  
    // Prepare data for the chart
    const data = [
      { name: 'Used', value: number },
      { name: 'Remaining', value: count - number },
    ];
  
    // Colors for the chart segments
    const COLORS = ['#0088FE', '#CCCCCC'];
  
    // Event handlers for hover
    const onPieEnter = (_, index) => {
      console.log(_)
      setActiveIndex(index);
    };
  
    const onPieLeave = (_) => {
      console.log(_)
      setActiveIndex(null);
    };
  
    return (
      <div>
        <h3>Percentage: {percentage}%</h3>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            activeIndex={activeIndex}
          />
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index]}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </PieChart>
      </div>
  )
}
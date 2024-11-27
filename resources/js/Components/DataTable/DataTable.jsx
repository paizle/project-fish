import './DataTable.scss'

export default function DataTable({
    className = '',
    children,
    data,
    schema,
    uniqueKey = 'id',
    ...props
}) {
    return (
        <table className="DataTable">
            <thead>
                <tr>
                    {
                        Object.keys(schema).map((column) => {
                            return schema[column] ? <th key={column}>{column}</th> : null
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {renderTBody(children, data, schema, uniqueKey)}
            </tbody>
            <tfoot>
                {data.length 
                    ? null
                    : (<tr><td colSpan="100%" className="no-data">(no data)</td></tr>)
                }
            </tfoot>
        </table>
    );
}

function renderTBody(children, data, schema, uniqueKey) {

    

    switch (typeof children) {
        case 'function': return data.map((row) => children(row))

        default: return data.map((row) => (
            <tr key={row[uniqueKey]}>
                {Object.keys(schema).map((column) => {
                    switch (typeof schema[column]) {
                        case 'function':
                            return (<td key={column}>{schema[column](row)}</td>)
                        default: 
                            return schema[column] ? <td key={column}>{row[schema[column]]}</td> : null
                    } 
                })}
            </tr>
        ))
    }
}

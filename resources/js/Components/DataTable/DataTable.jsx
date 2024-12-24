import './DataTable.scss'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export default function DataTable({
    className = '',
    children,
    isLoading = null,
    data = [],
    schema = {},
    uniqueKey = 'id',
    ...props
}) {
    function renderFooter() {
        if (isLoading) {
            return (
                <tr>
                    <td colSpan="100%" className="loading">
                        <span> </span>
                        <div className="spinner-backdrop">
                            <div className="spinner-wrapper">
                                <LoadingSpinner />
                            </div>
                        </div>
                    </td>
                </tr>
            )
        }

        if (!data?.length) {
            return (
                <tr>
                    <td colSpan="100%" className="no-data">
                        (no data)
                    </td>
                </tr>
            )
        }
    }

    return (
        <table className="DataTable">
            <thead>
                <tr>
                    {Object.keys(schema).map((column) => {
                        return schema[column] ? (
                            <th key={column}>{column}</th>
                        ) : null
                    })}
                </tr>
            </thead>
            <tbody>{renderTBody(children, data, schema, uniqueKey)}</tbody>
            <tfoot>{renderFooter()}</tfoot>
        </table>
    )
}

function renderTBody(children, data, schema, uniqueKey) {
    switch (typeof children) {
        case 'function':
            return data.map((row, index) => children(row, index))

        default:
            return data.map((row, index) => {
                const key =
                    typeof schema[uniqueKey] === 'function'
                        ? schema[uniqueKey](row, index)
                        : row[uniqueKey]

                return (
                    <tr key={key}>
                        {Object.keys(schema).map((column) => {
                            switch (typeof schema[column]) {
                                case 'function':
                                    return (
                                        <td key={column}>
                                            {schema[column](row, index)}
                                        </td>
                                    )
                                default:
                                    return schema[column] ? (
                                        <td key={column}>
                                            {row[schema[column]]}
                                        </td>
                                    ) : null
                            }
                        })}
                    </tr>
                )
            })
    }
}

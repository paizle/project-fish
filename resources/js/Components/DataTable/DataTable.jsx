import { useState} from 'react'
import './DataTable.scss'

import {  XMarkIcon, FunnelIcon as FunnelIconSolid } from '@heroicons/react/24/solid'

import {  FunnelIcon } from '@heroicons/react/24/solid'


export default function DataTable({
    className = '',
    children,
    data = [],
    schema = {},
    filters={},
    uniqueKey = 'id',
    onFilter = () => null,
    ...rest
}) {

    const [activeFilters, setActiveFilters] = useState({})

    const [selectingFilter, setSelectingFilter] = useState(null)

    const selectFilter = (filterName) => {
        setSelectingFilter(filterName)
    }

    const setActiveFilter = ((event) => {
        const name = event.target.name
        const value = event.target.value
        setActiveFilters((activeFilters) => {
            const newActiveFilters = JSON.parse(JSON.stringify(activeFilters))
            if (value) {
                newActiveFilters[name] = value
            } else {
                delete newActiveFilters[name]
            }
            
            return newActiveFilters
        })
        setSelectingFilter(null)
    })

    function renderFilter(filterName) {

        if (filterName !== selectingFilter) {
            return
        }

        return filterName === selectingFilter && (
            <select onChange={setActiveFilter} name={filterName}>
                <option value=''>(all)</option>
                {Object.keys(filters[filterName]).map((key) => <option value={key}>{filters[filterName][key]}</option>)}
            </select>
        )
    }

    function renderColumnHeader(column, schema, filters) {
    
        return schema[column] && (
            <th key={column}>
                {filters?.[column] 
                    && <button onClick={(e) => selectFilter(column)}>
                            {activeFilters[column]
                                ? <FunnelIconSolid /> 
                                : <FunnelIcon />
                            }
                            
                            
                        </button>}
                {column}
                
                {selectingFilter && renderFilter(column)}
            </th>
        )
    }
    
    function renderTBody(children, data, schema, uniqueKey) {
        switch (typeof children) {
            case 'function': return data.map((row, index) => children(row, index))
    
            default:
                return data.map((row, index) => {
                    const key = typeof schema[uniqueKey] === "function" 
                        ? schema[uniqueKey](row, index) 
                        : row[uniqueKey]
                        
                    return (
                        <tr key={key}>
                            {Object.keys(schema).map((column) => {
                                switch (typeof schema[column]) {
                                    case 'function':
                                        return (
                                            <td key={column}>{schema[column](row, index)}</td>
                                        )
                                    default:
                                        return schema[column] 
                                            ? (
                                                <td key={column}>{row[schema[column]]}</td>
                                            ) 
                                            : null
                                }
                            })}
                        </tr>
                    )}
                )
        }
    }

    const renderFilters = () => {
        return (
            <div className="filters">
                {Object.keys(filters).map((column) => activeFilters[column] && (
                    <label key={column}>
                        {column}: {filters[column][activeFilters[column]]}
                        <button className="text-sm" name={column} value="" onClick={setActiveFilter}><XMarkIcon /></button>
                    </label>
                    )
                )}
            </div>
        )
    }

    return (
        <table className="DataTable">
            {activeFilters && (
                <caption>
                    {renderFilters()}
                </caption>
            )}
            <thead>
                <tr>
                    {Object.keys(schema).map((column) => renderColumnHeader(column, schema, filters))}
                </tr>
            </thead>
            <tbody>{renderTBody(children, data, schema, uniqueKey)}</tbody>
            <tfoot>
                {data.length ? null : (
                    <tr>
                        <td colSpan="100%" className="no-data">
                            (no data)
                        </td>
                    </tr>
                )}
            </tfoot>
        </table>
    )
}



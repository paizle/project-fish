import './DataTableWithOperations.scss'
import { useState} from 'react'
import {  XMarkIcon } from '@heroicons/react/24/solid'
import {  FunnelIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export default function DataTableWithOperations({
    children,
    className = '',
    isLoading = false,
    data = [],
    schema = {},
    options={},
    uniqueKey = 'id',
    onFilter = () => null,
    ...rest
}) {
    const { filters = {}, sorting = false } = options

    const [activeFilters, setActiveFilters] = useState({})

    const [selectingFilter, setSelectingFilter] = useState(null)

    const selectFilter = (filterName) => {
        if (selectingFilter === filterName) {
            setSelectingFilter(null)
        } else {
            setSelectingFilter(filterName)
        }
        
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

    const renderFilter = (filterName) => {

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
        
        return !activeFilters[column] && schema[column] && (
            <th key={column}>

                <div className="cell-container">
                    
                    <div className='action-container'>
                        {sorting && (
                            <button className="sorting" onclick={(e) => sortColumn(column)}>
                                <ChevronUpDownIcon />
                            </button>
                        )}
                        {filters?.[column] && (
                            <button className="filter" onClick={(e) => selectFilter(column)}>
                                <FunnelIcon />
                            </button>
                        )}
                    </div>

                    <span>{column}</span>

                </div>
                
                {selectingFilter && renderFilter(column)}
                
            </th>
        )
    }
    
    function renderTBody() {
        switch (typeof children) {
            case 'function': return data.map((row, index) => children(row, index))
    
            default:
                return data.map((row, index) => {
                    const key = typeof schema[uniqueKey] === "function" 
                        ? schema[uniqueKey](row, index) 
                        : row[uniqueKey]
                        
                    return (
                        <tr key={key}>
                            {Object
                                .keys(schema)
                                .map((column) => renderTableDatum(column, row, index)
                            )}
                        </tr>
                    )
                })
        }
    }

    const renderTableDatum = (column, row, index) => {

        if (activeFilters[column]) {
            return
        }

        switch (typeof schema[column]) {
            case 'function':
                return (
                    <td key={column}>
                        {schema[column](row, index)}
                    </td>
                )
            default:
                return (
                    <td key={column}>
                        {row[schema[column]]}
                    </td>
                ) 
                    
        }
    }

    const renderActiveFilters = () => {
        return (
            <div className="filters">
                {Object.keys(filters).map((column) => activeFilters[column] && (
                    <label key={column}>
                        <span>{column}: {filters[column][activeFilters[column]]}</span>
                        <button className="text-sm" name={column} value="" onClick={setActiveFilter}><XMarkIcon /></button>
                    </label>
                    )
                )}
            </div>
        )
    }

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

    function sortColumn(column) {
        // todo
    }

    return (
        <table className="DataTableWithOperations">
            {!!Object.keys(activeFilters).length && (
                <caption>
                    {renderActiveFilters()}
                </caption>
            )}
            <thead>
                <tr>
                    {Object.keys(schema).map((column) => renderColumnHeader(column, schema, filters))}
                </tr>
            </thead>
            <tbody>{renderTBody(children, data, schema, uniqueKey)}</tbody>
            <tfoot>
                {renderFooter()}
            </tfoot>
        </table>
    )
}



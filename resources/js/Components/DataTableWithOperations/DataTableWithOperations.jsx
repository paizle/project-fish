import './DataTableWithOperations.scss'
import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import {
    FunnelIcon,
    ChevronUpDownIcon,
    EyeSlashIcon,
} from '@heroicons/react/24/outline'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export default function DataTableWithOperations({
    children,
    className = '',
    data = null,
    loadData = () => Promise.resolve(),
    onFiltersUpdate = () => Promise.resolve(),
    schema = {},
    options: { filters = {}, sorting = false, toggleShow = {} } = {},
    uniqueKey = 'id',
}) {
    const [innerData, setInnerData] = useState(data ?? [])
    const [activeFilters, setActiveFilters] = useState({})
    const [isLoading, setIsLoading] = useState(null)
    const [hiddenColumns, setHiddenColumns] = useState([])
    const [selectingFilter, setSelectingFilter] = useState(null)

    useEffect(() => {
        if (data === null) {
            setIsLoading(true)
            loadData()
                .then((data) => setInnerData(data ?? []))
                .finally(() => setIsLoading(false))
        }
    }, [])

    useEffect(() => {
        const filtersQuery = {}

        Object.keys(activeFilters).forEach((name) => {
            filtersQuery[filters[name].key] = activeFilters[name]
        })

        setIsLoading(true)
        onFiltersUpdate(filtersQuery)
            .then((data) => setInnerData(data))
            .finally(() => setIsLoading(false))
    }, [activeFilters])

    const hideColumn = (event) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setHiddenColumns((hiddenColumns) => {
            const newHiddenColumns = JSON.parse(JSON.stringify(hiddenColumns))
            if (value) {
                newHiddenColumns.push(name)
            } else {
                newHiddenColumns.splice(newHiddenColumns.indexOf(name), 1)
            }
            return newHiddenColumns
        })
    }

    const selectFilter = (column) => {
        if (selectingFilter === column) {
            setSelectingFilter(null)
        } else {
            setSelectingFilter(column)
        }
    }

    const setActiveFilter = (event) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
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
    }

    const renderFilter = (filterName) => {
        if (filterName !== selectingFilter) {
            return
        }

        return (
            filterName === selectingFilter && (
                <select onChange={setActiveFilter} name={filterName}>
                    <option value="">(all)</option>
                    {Object.keys(filters[filterName].options)
                        .sort(
                            (a, b) =>
                                filters[filterName].options[a] >
                                filters[filterName].options[b],
                        )
                        .map((key) => (
                            <option key={key} value={key}>
                                {filters[filterName].options[key]}
                            </option>
                        ))}
                </select>
            )
        )
    }

    function renderColumnHeader(column) {
        return (
            !hiddenColumns.includes(column) &&
            !activeFilters[column] &&
            schema[column] && (
                <th key={column} className={column.replaceAll(' ', '')}>
                    <div className="cell-container">
                        <div className="action-container">
                            {sorting && (
                                <button
                                    className="sorting"
                                    onClick={(e) => sortColumn(column)}
                                >
                                    <ChevronUpDownIcon />
                                </button>
                            )}
                            {toggleShow.includes(column) && (
                                <button
                                    className="hide"
                                    name={column}
                                    value="1"
                                    onClick={hideColumn}
                                >
                                    <EyeSlashIcon />
                                </button>
                            )}
                            {filters?.[column] && (
                                <button
                                    className="filter"
                                    onClick={(e) => selectFilter(column)}
                                >
                                    <FunnelIcon />
                                </button>
                            )}
                        </div>

                        <span className="heading-container">{column}</span>
                    </div>

                    {selectingFilter && renderFilter(column)}
                </th>
            )
        )
    }

    function renderTBody(innerData) {
        switch (typeof children) {
            case 'function':
                return innerData.map((row, index) => children(row, index))

            default:
                return innerData.map((row, index) => {
                    const key =
                        typeof schema[uniqueKey] === 'function'
                            ? schema[uniqueKey](row, index)
                            : row[uniqueKey]

                    return (
                        <tr key={key}>
                            {Object.keys(schema).map((column) =>
                                renderTableDatum(column, row, index),
                            )}
                        </tr>
                    )
                })
        }
    }

    const renderTableDatum = (column, row, index) => {
        if (activeFilters[column] || hiddenColumns.includes(column)) {
            return
        }

        switch (typeof schema[column]) {
            case 'function':
                return <td key={column}>{schema[column](row, index)}</td>
            default:
                return <td key={column}>{row[schema[column]]}</td>
        }
    }

    const renderActiveFilters = () => {
        return (
            <div className="filters">
                {Object.keys(filters).map(
                    (column) =>
                        activeFilters[column] && (
                            <label key={column}>
                                <span>
                                    {column}:<wbr />{' '}
                                    {
                                        filters[column].options[
                                            activeFilters[column]
                                        ]
                                    }
                                </span>
                                <button
                                    className="text-sm"
                                    name={column}
                                    value=""
                                    onClick={setActiveFilter}
                                >
                                    <XMarkIcon />
                                </button>
                            </label>
                        ),
                )}
                {hiddenColumns.map((column) => (
                    <label key={column}>
                        <span>
                            {column}:<wbr /> (hidden)
                        </span>
                        <button
                            className="text-sm"
                            name={column}
                            value=""
                            onClick={hideColumn}
                        >
                            <XMarkIcon />
                        </button>
                    </label>
                ))}
            </div>
        )
    }

    function renderFooter() {
        if (!innerData?.length) {
            return (
                <tr>
                    <td colSpan="100%" className="no-data">
                        (no data)
                    </td>
                </tr>
            )
        }
    }

    function sortColumn(column) {}

    return (
        <div ref={forwardRef ? forwardRef : null} className={`DataTableWithOperations ${className}`}>
            <table>
                <thead>
                    <tr className="caption">
                        <th colSpan={Object.keys(schema).length}>
                            {renderActiveFilters()}
                        </th>
                    </tr>
                    <tr>
                        {Object.keys(schema).map((column) =>
                            renderColumnHeader(column, schema, filters),
                        )}
                    </tr>
                </thead>
                <tbody>{renderTBody(innerData)}</tbody>
                <tfoot>{renderFooter()}</tfoot>
            </table>

            {isLoading ? (
                <div className="spinner-backdrop">
                    <div className="spinner-wrapper">
                        <LoadingSpinner />
                    </div>
                </div>
            ) : null}
        </div>
    )
}

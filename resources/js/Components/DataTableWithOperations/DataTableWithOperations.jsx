import './DataTableWithOperations.scss'
import { useState, useEffect, useRef } from 'react'
import { ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/24/solid'
import {
    FunnelIcon,
    ChevronUpDownIcon,
    EyeSlashIcon,
} from '@heroicons/react/24/outline'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export const SortingMethods = {
	ALPHABETIC: 'alphabetic',
	NUMERIC: 'numeric',
	CHRONOLOGICAL: 'chronological'
}

export const SortDirection = {
	DESC: 'desc',
	ASC: 'asc'
}

export default function DataTableWithOperations({
    children,
    forwardRef,
    className = '',
    data = null,
    loadData = () => Promise.resolve(),
    onFiltersUpdate = () => Promise.resolve(),
    schema = {},
    options = {},
    uniqueKey = 'id',
}) {
    const [innerData, setInnerData] = useState(data ?? [])
    const [activeFilters, setActiveFilters] = useState({})
    const [isLoading, setIsLoading] = useState(null)
    const [hiddenColumns, setHiddenColumns] = useState(options.hiddenColumns || [])
    const [selectingFilter, setSelectingFilter] = useState(null)
		const [sortColumn, setSortColumn] = useState(null)
		const [sortDirection, setSortDirection] = useState(null)

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
            filtersQuery[options.filters[name].key] = activeFilters[name]
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
								setSortColumn(null)
								setSortDirection(null)
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
                    {Object.keys(options.filters[filterName].options)
                        .sort(
                            (a, b) =>
															options.filters[filterName].options[a] >
															options.filters[filterName].options[b],
                        )
                        .map((key) => (
                            <option key={key} value={key}>
                                {options.filters[filterName].options[key]}
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
                            {schema[column].sorting && (
                                <button
                                    className="sorting"
                                    onClick={(e) => selectSortColumn(column)}
                                >
																	{sortColumn === column 
																		? sortDirection === SortDirection.DESC
																			? <ChevronDownIcon />
																			: <ChevronUpIcon />
																		: <ChevronUpDownIcon />
																	}
                                    
                                </button>
                            )}
                            {options.toggleShow.includes(column) && (
                                <button
                                    className="hide"
                                    name={column}
                                    value="1"
                                    onClick={hideColumn}
                                >
                                    <EyeSlashIcon />
                                </button>
                            )}
                            {options.filters?.[column] && (
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
        return <td key={column}>{schema[column].render(row)}</td>
    }

    const renderActiveFilters = () => {
        return (
            <div className="filters">
                {Object.keys(options.filters).map(
                    (column) =>
                        activeFilters[column] && (
                            <label key={column}>
                                <span>
                                    {column}:<wbr />{' '}
                                    {
																			options.filters[column].options[
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

    function selectSortColumn(column) {
			if (sortColumn === column) {
				if (sortDirection === SortDirection.DESC) {
					setSortDirection(SortDirection.ASC)
				} else {
					setSortDirection(SortDirection.DESC)
				}
			} else {
				setSortColumn(column)
				setSortDirection(SortDirection.DESC)
			}
		}

		const sortDataType = {
			[SortingMethods.NUMERIC]: (value) => {
				const test = parseInt(value)
				if (Number.isNaN(test)) {
					return Number.POSITIVE_INFINITY
				}
				return test
			},
			[SortingMethods.ALPHABETIC]: (value) => value,
			[SortingMethods.CHRONOLOGICAL]: (value) => {
				const test = new Date(value + ', 2024') // todo: get year
				if (Number.isNaN(test?.getTime())) {
					return null
				}
				return test
			}
		}

		const columnIndexes = {}
		let index = 0
		Object.keys(schema).forEach((column) => {
			if (!(hiddenColumns.length && hiddenColumns.includes(column)) && ((activeFilters[column] ?? null) === null)) {
				columnIndexes[column] = index++
			}
		})

		let rows = innerData
			.map((row) => {
				return Object.keys(columnIndexes)
					.map((column) => {
						if (column === sortColumn) {
							const value = schema[column].render(row)
							return {
								value,
								sortable: sortDataType[schema[column].sorting](value)
							}
						}
						return schema[column].render(row)
					})
			})
			.sort((a, b) => {
				if (!sortColumn) {
					return 1
				}
				const test1 = a[columnIndexes[sortColumn]].sortable 
				const test2 = b[columnIndexes[sortColumn]].sortable
					
				if (test1 < test2) {
					return 1  * (sortDirection === SortDirection.ASC ? 1 : -1)
				} else if (test1 > test2) {
					return -1 * (sortDirection === SortDirection.ASC ? 1 : -1)
				}
				return 0
			})
			.map((row) => {
				if (sortColumn) {
					row[columnIndexes[sortColumn]] = row[columnIndexes[sortColumn]].value
				}
				return row
			})
			

    return (
        <div
            ref={forwardRef}
            className={`DataTableWithOperations ${className}`}
        >
            <table>
                <thead>
                    <tr className="caption">
                        <th colSpan={Object.keys(schema).length}>
                            {renderActiveFilters()}
                        </th>
                    </tr>
                    <tr>
                        {Object.keys(schema).map((column) =>
                            renderColumnHeader(column, schema, options.filters),
                        )}
                    </tr>
                </thead>
                <tbody>
									{rows.map((row, index) => (
										<tr key={index}>
											{Object.keys(columnIndexes).map((column, index) => (
												<td key={column}>
													{
														row[index]
													}
												</td>
											))}
										</tr>
									))}
								</tbody>
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

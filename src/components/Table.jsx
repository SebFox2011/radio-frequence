import React from "react"
import { useTable, useSortBy, usePagination } from "react-table"



const Table = ({ data }) => {
    const columns = React.useMemo(
        () => [{
            Header: 'Commune',
            accessor: "commune", isSorted: true
        },
        { Header: "Bande", accessor: "bande" },
        { Header: "Emission", accessor: 'emission' },
        { Header: "Réception", accessor: "réception" },
        { Header: "Decalage", accessor: "decalage" },
        { Header: "Mode", accessor: "mode" },
        { Header: "Type", accessor: "type" },
        { Header: "Ctccs", accessor: "ctccs" },
        { Header: "Fonction", accessor: "fonction" },
        { Header: "Station", accessor: "station" },
        ], []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data }, useSortBy, usePagination)

    return (<>
        <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
            <table {...getTableProps()} style={{ border: 'solid 2px #373d47' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        background: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                                background: 'linear-gradient(#ffffff,#c6c5cc)',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div style={{ padding: '0.5rem' }}>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>{' '}
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go to page:{' '}
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                />
            </span>{' '}
            <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
            >
                {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>

    </>
    )
}

export default Table
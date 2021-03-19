import React from 'react'

import { useTable, usePagination } from 'react-table'
import MOCK_DATA from '../mock/MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from '../utils/columns';

import { useMemo } from 'react';

import '../assets/index.css'

//da qui
export const PaginationTable = () =>{

    //prima della chiamata di useTable 
    const columns = useMemo (() => /*GROUPED_COLUMNS*/COLUMNS, []) //arrow function che ritorna le colonne e un array vuoto
    const data = useMemo (() => MOCK_DATA, []) // stessa cosa, ritorna MOCK_DATA e un empty dependency array

    const tableInstance = useTable({
        /*columns: columns,
        data: data*/
        //questo può essere semplificato grazie alla sintassi es6 in:
        
        columns,
        data
    }, usePagination
    )
    
    //use table ritorna una table instance che memorizziamo in una costante
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow 
    } = tableInstance  
    
    const { pageIndex } = state

    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}> 
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                            
                        </tr>
                    ))
                }
                
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) =>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                               
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>

        <div>
            <span>
                Page {' '}
                <strong>
                    {pageIndex +1} of {pageOptions.length}
                </strong> {' '}
            </span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous Page</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next Page</button>
        </div>
        </>

    )
}
//a qui
//questo è uno snippet creato con rafc (a me non funziona)

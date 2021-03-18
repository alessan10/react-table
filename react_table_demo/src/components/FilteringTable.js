import React from 'react'

import { useTable, useGlobalFilter } from 'react-table'
import MOCK_DATA from '../mock/MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from '../utils/columns';

import { useMemo } from 'react';

import '../assets/index.css'
import { GlobalFilter } from '../utils/GlobalFilter';

//da qui
export const FilteringTable = () =>{

    //prima della chiamata di useTable 
    const columns = useMemo (() => /*GROUPED_COLUMNS*/COLUMNS, []) //arrow function che ritorna le colonne e un array vuoto
    const data = useMemo (() => MOCK_DATA, []) // stessa cosa, ritorna MOCK_DATA e un empty dependency array

    const tableInstance = useTable({
        /*columns: columns,
        data: data*/
        //questo può essere semplificato grazie alla sintassi es6 in:
        
        columns,
        data
    },useGlobalFilter)
    
    //use table ritorna una table instance che memorizziamo in una costante
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        rows, 
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance    

    const {globalFilter} = state

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
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
                    rows.map(row => {
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
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                            footerGroup.headers.map(column => (
                                <td {...column.getFooterProps}>
                                    {
                                        column.render('Footer')
                                    }
                                </td>
                            ))
                        }
                        </tr>  
                    ))
                }
            </tfoot>
        </table>
        </>
    )
}
//a qui
//questo è uno snippet creato con rafc (a me non funziona)

import React from 'react'

import { useTable, useBlockLayout } from 'react-table'
import MOCK_DATA from '../mock/MOCK_DATA.json'
import { COLUMNS} from '../utils/columns';
import { useMemo } from 'react';
import '../assets/index.css'
import { useSticky } from 'react-table-sticky'
import { Styles } from '../utils/TableStyles'

//da qui
export const StickyTable = () =>{

    //prima della chiamata di useTable 
    const columns = useMemo (() => /*GROUPED_COLUMNS*/COLUMNS, []) //arrow function che ritorna le colonne e un array vuoto
    const data = useMemo (() => MOCK_DATA, []) // stessa cosa, ritorna MOCK_DATA e un empty dependency array

    const tableInstance = useTable({
        /*columns: columns,
        data: data*/
        //questo può essere semplificato grazie alla sintassi es6 in:
        
        columns,
        data
    }, 
    useBlockLayout,
    useSticky
    )
    
    //use table ritorna una table instance che memorizziamo in una costante
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        rows, 
        prepareRow 
    } = tableInstance    

    const firstPageRows = rows.slice(0,20)

    return (
        <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
    )
}
//a qui
//questo è uno snippet creato con rafc (a me non funziona)

import React, {useState} from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({filter, setFilter}) => {
    const [value, setValue] = useState (filter)
    
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    },1000) //1secondo

    return (
        <div className="search">
            <span>
            Search: {''}
            <input className="textinput" value={value || ''} onChange={(e) => {
                setValue(e.target.value)
                onChange(e.target.value)
            }}/>
        </span>
        </div>
        
    )
}
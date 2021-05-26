import React from 'react'
import {TextField} from "@material-ui/core";
import s from './Search.module.css'

const Search = () => {
    return (
        <div className={s.search}>
            <TextField id="standard-basic" label="Search" fullWidth={true}/>
        </div>
    )
}

export default Search
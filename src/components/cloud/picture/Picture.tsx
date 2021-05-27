import React from 'react'
import style from './Picture.module.scss'
import {Button, TextField} from "@material-ui/core";


const Picture = () => {
    return (
        <div>
            <div className={style.pictureContainer}>
                <div className={style.picture}>
                </div>
                <Button variant="contained" color="primary" className={style.button}>
                    Bookmark it!
                </Button>
                <form>
                    <TextField id="outlined-basic" label="some tags?" variant="outlined" className={style.field}/>
                </form>
            </div>
        </div>
    )
}

export default Picture
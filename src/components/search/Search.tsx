import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import style from './Search.module.scss'
import Picture, {PictureType} from "./picture/Picture";
import api from "../../api/api";
import {useStyles} from "../menu/Menu";
import {Button, TextField} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";


const Search = () => {
    const classes = useStyles();
    const [requestText, setRequestText] = useState<string>("")
    const [inputText, setInputText] = useState<string>("")
    const [pictureList, setPictureList] = useState<Array<PictureType>>([])
    const [page, setPage] = React.useState(1);
    const [pagesCount, setPagesCount] = useState<number>(0)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        if (requestText !== "") {
            api.getImg(requestText, page)
                .then((res) => {
                    setPictureList(res.photos.photo)
                    setPagesCount(res.photos.pages)
                })
                .catch((err) => {
                    setError("Some error")
                })
        }
    }, [requestText, page])


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setRequestText(inputText)
    }

    const onBlurHandler = () => {
        setRequestText(inputText)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        try {
            if (e.charCode === 13) {
                setRequestText(inputText)
                e.stopPropagation();
                e.preventDefault();
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic"
                           className={style.textField}
                           label="Find pictures"
                           fullWidth={true}
                           onChange={onChangeHandler}
                           onBlur={onBlurHandler}
                           onKeyPress={onKeyPressHandler}
                />
                <Button onClick={onClickHandler}
                        color="primary"
                        variant="contained">Find</Button>
            </form>
            <div className={style.paginator}>
                <Pagination variant="outlined" color="primary" count={Math.ceil(pagesCount/15)} page={page} shape="rounded" onChange={handleChange} />
            </div>
            <div className={style.container}>
                <Picture pictures={pictureList}/>
            </div>
        </div>
    )
}

export default Search
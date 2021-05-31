import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import style from './Picture.module.scss'
import {Button, TextField} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
export type PictureType = {
    farm: number,
    id: string,
    isfamily: number,
    isfriend: number,
    ispublic: number,
    owner: string,
    secret: string,
    server: string,
    title: string
}

type propsType = {
    pictures: Array<PictureType>
}


const Picture = (props: propsType) => {

    const [tag, setTag] = useState("")
    const [ids, setIds] = useState<string>("")
    const [requestText, setRequestText] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTag(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        setRequestText(tag)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setRequestText(tag)
        }
    }

    const getPicUrl = (farm: number, server: string, id: string, secret: string) => {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    }

    const setValues = (farm: number, server: string, id: string, secret: string, title: string) => {
        localStorage.setItem(id, JSON.stringify({farm, server, id, secret, title}));
        setIds(id)
    }

    const renderPictureItem = (picture: PictureType, idPic: string) => {
        const {farm, server, id, secret, title} = picture;
        return (
            <ul key={idPic}>
                <div className={style.title}>{title}</div>
                <img src={getPicUrl(farm, server, id, secret)} width="300px" height="300px"/>
                {!!localStorage.getItem(id) ?
                    <Button variant="contained"
                            startIcon={<DeleteIcon />}
                            size="small"
                            color="secondary"
                            onClick={() => {
                                localStorage.removeItem(id)
                                setIds(secret)
                            }}
                            className={style.button}>Remove it</Button>
                    :
                    <Button variant="contained"
                            size="small"
                            color="primary"
                            className={style.button}
                            onClick={() => setValues(farm, server, id, secret, title)}>Bookmark it</Button>}
                <TextField label="some tag?"
                           className={style.field}
                           onChange={onChangeHandler}
                           onBlur={onBlurHandler}
                           onKeyPress={onKeyPressHandler}
                />
            </ul>
        )
    }

    return (
        <div className={style.pictureContainer}>
            {props.pictures.map((picture) => renderPictureItem(picture, picture.id))}
        </div>
    )

}


export default Picture


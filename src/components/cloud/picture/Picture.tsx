import React, {useState} from 'react'
import style from './Picture.module.scss'
import {Button, TextField} from "@material-ui/core";

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

    const [ids, setIds] = useState<string>('')

    const getImageUrl = (farm: number, server: string, id: string, secret: string) => {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    }

    const setValues = (farm: number, server: string, id: string, secret: string, title: string) => {
        localStorage.setItem(id, JSON.stringify({farm, server, id, secret, title}));
        setIds(id)
    }

    const renderPictureItem = (picture: PictureType, idPic: string) => {
        const {farm, server, id, secret, title} = picture;
    }

        return (
            <div>
                <div className={style.pictureContainer}>
                    <div className={style.picture}>
                    </div>
                    <Button variant="contained" color="primary" className={style.button}>
                        Bookmark it!
                    </Button>
                </div>
            </div>
        )

}


export default Picture
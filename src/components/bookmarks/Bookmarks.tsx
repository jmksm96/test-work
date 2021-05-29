import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {PictureType} from "../search/picture/Picture";
import style from "../search/picture/Picture.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";


const Bookmarks = () => {
    const [ids, setIds] = useState<string>("")

    const getPicUrl = (farm: number, server: string, id: string, secret: string) => {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    }

    const renderPictureItem = (picture: PictureType, idPic: string) => {
        const {farm, server, id, secret, title} = picture;
        debugger
        return (
            <ul key={idPic}>
                <div>
                    <div className={'title'}>{title}</div>
                    <img src={getPicUrl(farm, server, id, secret)} width="300px"/>
                    <Button variant="contained"
                            className={style.button}
                            size="small"
                            startIcon={<DeleteIcon />}
                            color="secondary"
                            onClick={() => {
                                localStorage.removeItem(id)
                                setIds(id)
                            }}>Remove it</Button>
                </div>
            </ul>
        )
    }

    const storage = () => {
        let pictures: Array<PictureType> = []
        let keys: Array<string> = Object.keys(localStorage)
        for (let i = keys.length; i--;) {
            // @ts-ignore
            pictures.push(JSON.parse(localStorage.getItem(keys[i])))
        }
        return pictures;
    }

    debugger
    return <div className={style.pictureContainer}>
        {storage().map((picture: PictureType) => renderPictureItem(picture, picture.id))}
    </div>


}

export default Bookmarks
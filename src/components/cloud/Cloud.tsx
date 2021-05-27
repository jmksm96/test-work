import axios from "axios";
import React, {useEffect, useState} from "react";
import Paginator from "../common/components/paginator/Paginator";
import style from './Cloud.module.scss'
import Picture from "./picture/Picture";


const Cloud = () => {








    const [items, setItems] = useState(null)

    useEffect(() => {
        axios.get(`https://api.flickr.com/services/rest/?safe_search=safe&api_key=88511e631d64958716f46a5c31c01824&sort=relevance&method=flickr.interestingness.getList&per_page=50&media=photos&extras=url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o&license=1,2,3,4,5,6&format=json`)
            .then((res => {
                setItems(res.data.jsonFlickrApi)
            }))
    }, [])


    return (
        <div>
            {console.log(items)}
            <div className={style.paginator}>
                <Paginator/>
            </div>
            <div className={style.container}>
                {/*{items.map(item => (*/}
                {/*        <img src = {item}/>*/}
                {/*))}*/}
                <Picture/>
                <Picture/>
                <Picture/>
                <Picture/>

            </div>
        </div>
    )
}

export default Cloud
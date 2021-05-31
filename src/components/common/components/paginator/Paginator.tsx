import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

type PropsType = {

    pagesCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}


const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.pagesCount / props.portionSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;
const pagesFilter = pages
    .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)



    return<div className={styles.paginator}>

        { portionNumber > 1 &&
        <button  onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                    [styles.selectedPage]: props.currentPage === p
                }, styles.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

    </div>
}
export default Paginator



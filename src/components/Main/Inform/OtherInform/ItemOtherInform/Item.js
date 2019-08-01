import React from 'react';
import style from '../../../Main.module.css';

const Item = (props) => {
    return (
        <div className={style.item}>
            <p className={style.titleBox} id={props.id}>{props.name}</p>
            <span>{props.degre}</span>
            
        </div>
    )
}

export default Item;
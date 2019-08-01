import React from 'react';
import style from '../Main.module.css';

const Degree = (props) => {
    
    return (
        <div className={`${style.degree} ${style.boxInform}`}>
            <div className={style.centerBox}>
                <p className={style.titleBox}>Degree</p>
                <span>{props.temp}</span>
            </div>
        </div>
    )
}

export default Degree;
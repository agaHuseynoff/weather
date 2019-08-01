import React from 'react';
import style from '../Main.module.css';

const SunriseSunset = (props) => {
    return (
        <div className={`${style.SunriseSunset} ${style.boxInform}`}>
            <div className={style.centerBox}>
                <div className={style.iconBox}>
                    <div className={style.circleBox}>
                        <i className="fas fa-sun"></i>
                    </div>
                </div>

                <div className={style.sunset}>
                    <span className={style.titleBox}> SunSet</span>
                    <p> {props.sunrise}</p>
                </div>

                <div className={style.sunrise}>
                    <span className={style.titleBox}> Sunrise</span>
                    <p> {props.sunset}</p>
                </div>
            </div>
        </div>
    );
}

export default SunriseSunset;
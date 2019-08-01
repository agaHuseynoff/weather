import React from 'react';
import style from '../../Main.module.css';
import Item from './ItemOtherInform/Item';

const OtherInform = (props) => {
    let country = props.country;
    let city = props.city;
    let lat = props.lat;
    let lon = props.lon;
    let wind = props.wind;

    let state = [
        {
            id: 1,
            name: 'Country',
            degre: country
        }, {
            id: 2,
            name: 'City',
            degre: city
        }, {
            id: 3,
            name: 'Lon',
            degre: lon
        }, {
            id: 4,
            name: 'Lat',
            degre: lat
        }, {
            id: 5,
            name: 'Speed Wind',
            degre: wind
        }
    ];

    let emptyBoxes = state.map(inform => <div className='col-lg-3 col-md-3 col-sm-4 col-4'><Item id={inform.id} name={inform.name} degre={inform.degre}/></div>);

    return (
        <div className={` ${style.OtherInform} ${style.boxInform} `}>
            <div className={style.centerBox}>
                <div className='row'>
                    {emptyBoxes}
                </div>

            </div>
        </div>
    )
}

export default OtherInform;
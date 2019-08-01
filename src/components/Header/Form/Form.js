import React from 'react';
import style from '../Header.module.css';

class Form extends React.Component {
    render(props) {
        return(
            <div className={style.search}>
                <form onSubmit={this.props.weatherData} >
                    <input type='text' name='city' placeholder='Search City'/>
                    <button>Axtar</button>
                </form>
            </div>
        )
    }
}

export default Form;
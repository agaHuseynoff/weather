import React from 'react';
import Form from './Form/Form';
import style from './Header.module.css';



class Header extends React.Component {
    render(props) {
        return (
            <div className={style.header}>
                <div className={style.refresh}>
                    <h4>Right Now</h4>
                    <span>
                        <i className="fas fa-redo-alt"></i>
                    </span>
                </div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>

                <Form weatherData={this.props.getWeather}/>
            </div>
        )
    }
}

export default Header;
import React from 'react';
import style from './Main.module.css';
import Degree from './Inform/Degree';
import SunriseSunset from './Inform/SunriseSunset';
import OtherInform from './Inform/OtherInform/OtherInform';

class Main extends React.Component {

    render(props) {
        return (
            <div className={style.main}>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                        <Degree temp={this.props.state.temp} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                        <SunriseSunset sunrise={this.props.state.sunrise} sunset={this.props.state.sunset} />
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <OtherInform 
                        country={this.props.state.country} 
                        city={this.props.state.city}
                        lat={this.props.state.lat} 
                        lon={this.props.state.lon}
                        wind={this.props.state.wind} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;
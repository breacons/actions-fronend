import React, { Component } from 'react';
import propTypes from 'prop-types';



import './styles.scss';
import Battery from "./Battery/Battery";

class CarInfos extends Component {
    render() {
        const {car, charging, ...rest} = this.props;


        return (
            <div className="info-container">
                <Battery charge={car && car.charge} charging={charging} {...rest}/>
            </div>
        );
    }

}

export default CarInfos;

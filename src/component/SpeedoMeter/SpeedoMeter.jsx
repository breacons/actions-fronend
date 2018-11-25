import React, { Component } from 'react';
import propTypes from 'prop-types';

import './styles.scss';
import CircularProgressBar from "./CircularProgress/CircularProgress";

const maxSpeed = 250;
const circularMax = 335;

class SpeedoMeter extends Component {
    state = {
        percentage: 0,
        speed: 0,
        direction: 1
    };


    render() {
        return (
            <div className="meter-container">
                <div className="background" />
                <div className="meterWrapper">
                    <CircularProgressBar
                        strokeWidth="5"
                        sqSize="500"
                        percentage={(this.props.speed || 0 )* 100 / circularMax}
                        speed = {this.props.speed}
                    />
                    <div className="speed">{(this.props.speed || 0)}</div>

                </div>

            </div>
        );
    }

}

export default SpeedoMeter;

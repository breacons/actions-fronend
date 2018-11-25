import React, { Component } from 'react';
import propTypes from 'prop-types';

import './styles.scss';
import BatteryProgress from "./BatteryProgress/BatteryProgress";
import CircularProgressBar from "../../SpeedoMeter/CircularProgress/CircularProgress";

const batteryMax = 1;

class Battery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: props.percentage || 0
        };

        this.stop = this.stop.bind(this);

    }

    stop() {
        const { interactionData } = this.props;

        if (interactionData && interactionData.endActionUrl) {
            fetch(interactionData.endActionUrl).then(res => res.json()).then(resp => console.log(resp));
        }

        this.props.updateScreen('payment')
    }


    render() {
        const { charge, charging } = this.props;

        return (
            <div className="battery-meter-container">
                <div className="battery-background" />
                <div className="battery-meterWrapper">

                    <BatteryProgress
                        strokeWidth="7"
                        sqSize="251"
                        percentage={(charge && charge.batteryLevel * 100 || 40) * 0.7}
                        level={(charge && charge.batteryLevel || 0)}
                        charging={charging}
                    />
                    <div className="km-left">
                        <div className="km-left-value">{charging ? 24 : charge && charge.estimatedRange || 0}</div>
                        <div className="km-left-subtitle">{charging ? "kw charged" : "km left on current charge"}</div>
                    </div>
                    {charging && (
                        <div>
                            <div className='stop-charging' onClick={this.stop}>Stop charging</div>
                        </div>
                    )}
                </div>

            </div>
        )
    }
}

export default Battery;
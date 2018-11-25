import React, { Component } from 'react';
import propTypes from 'prop-types';
import posed from 'react-pose';
import { TransitionGroup } from 'react-transition-group'

import './styles.scss';

import marker from '../../img/Charger_Icon.png'
import tick from '../../img/tick.png'
import turnLeft from '../../img/turn_left.png'
import charger from '../../img/charger.png'


class Charge extends Component {


    constructor(props) {
        super(props);

        this.state = {
            booked: false
        };

        this.book = this.book.bind(this)
        this.activate = this.activate.bind(this)
    }


    book() {
        const { interactionData } = this.props;
        this.setState({ booked: true });

        if (interactionData && interactionData.actionUrl) {
            fetch(interactionData.actionUrl).then(res => res.json()).then(resp => console.log(resp));
        }

        setTimeout(() => this.props.updateScreen('info'), 2000)
    }

    activate() {
        const { interactionData } = this.props;
        this.setState({ booked: true });

        if (interactionData && interactionData.actionUrl) {
            fetch(interactionData.actionUrl).then(res => res.json()).then(resp => console.log(resp));
        }

        this.props.updateScreen('charging')

    }

    getScreen() {
        const { booked } = this.state;
        const { sub } = this.props;

        switch (sub) {
            case 'booking':
                return (
                    !this.state.booked ? (
                        <div className='hidden animated-fadein'>
                            <img src={marker} className="charge-icon" />
                            <div className='charge-first'> We are running low on battery!</div>
                            <div className='charge-second'>Charging available for 15 minutes<br /> 20 kilometers
                                ahead.
                            </div>
                            <div className='charge-bookit' onClick={this.book}>Book it!</div>
                        </div>) : (
                        <div className='hidden animated-fadein'>
                            <img src={tick} className="tick-icon" />
                            <div className='charge-second'>Charging booked</div>

                        </div>
                    )
                );
            case 'arriving':
                return (
                    <div className='hidden animated-fadein'>
                        <img src={turnLeft} className="tick-icon" />
                        <div className='charge-first'>Arriving to charger!</div>
                        <div className='charge-second'>Find charger #3 on the left side</div>

                    </div>
                );
            case 'arrived':
                return (
                    <div className='hidden animated-fadein'>
                        <img src={charger} className="charge-icon" />
                        <div className='charge-first'>Arrived to charger</div>
                        <div className='charge-second'>To use this charger, take the Type-2<br/>adapter from the trunk.
                        </div>
                        <div className='charge-bookit' onClick={this.activate}>Start charging</div>

                    </div>
                )
        }

    }


    render() {
        return (
            <div className="charge-container">

                {this.getScreen()}
            </div>
        );
    }

}

export default Charge;

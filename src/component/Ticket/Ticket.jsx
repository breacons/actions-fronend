import React, { Component } from 'react';
import propTypes from 'prop-types';

import './styles.scss';

import highway from '../../img/highway.png'
import turnLeft from "../../img/turn_left.png";
import tick from "../../img/tick.png";

class Ticket extends Component {
    state = {
        purchased: false
    };

    constructor(props) {
        super(props);

        this.purchase = this.purchase.bind(this);
    }


    purchase() {
        console.log('purchase')
        this.setState({ purchased: true });
        setTimeout(() => this.props.updateScreen('info'), 2000);
    }

    render() {
        return (
            <div style={{marginLeft: -30}}>
                {!this.state.purchased ? (<div><img src={highway} className='highway-icon' />
                    <div className='ticket-first'>You are approaching a highway</div>
                    <div className='ticket-second'>Would you like to purchase<br/> the toll for $5?
                    </div>
                    <div className='ticket-bookit' onClick={() => this.purchase()}>Purchase</div>
                </div>) : (
                    <div>
                        <img src={tick} className="tick-icon" />
                        <div className="charge-first">Payment succeeded</div>
                        <div className="pay-second">Have a nice a trip!</div>
                    </div>
                )}

            </div>
        );
    }

}

export default Ticket;

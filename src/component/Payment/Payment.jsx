import React, { Component } from 'react';
import propTypes from 'prop-types';

import './styles.scss';

import mobilePay from '../../img/mobilepay.svg';

class Payment extends Component {
    state = {
        payed: false
    };

    constructor(props) {
        super(props);

        this.pay = this.pay.bind(this);
    }


    pay(){
        this.setState({payed: true})

        setTimeout(() => this.props.updateScreen('info'), 2000);
    }

    render() {
        return (
            <div className="payment-container">
                <img src={mobilePay} />
                {!this.state.payed ? (
                    <div>
                        <div className="pay-second">20 kw was charged into the car for $3</div>
                        <div className='pay-button' onClick={() => this.pay()}>Okay</div>
                    </div>) :
                    <div>
                        <div className="charge-first">Payment succeeded</div>
                        <div className="pay-second">Ready to roll!</div>
                    </div>

                }

            </div>
        );
    }

}

export default Payment;

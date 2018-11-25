import React, { Component } from 'react';
import propTypes from 'prop-types';

import './styles.scss';
import CarInfos from "../CarInfos/";
import Charge from "../Charge";
import Battery from "../CarInfos/Battery/Battery";
import Payment from "../Payment/";
import Ticket from '../Ticket'

class Actions extends Component {


    componentDidMount(){
        // setInterval(() => this.updateScreen('info'), 2000)
    }



    getScreen(){
        const {screen, updateScreen, interactionData, subScreen} = this.props;

        switch (screen) {
            case 'info': return  <CarInfos {...this.props} />;
            case 'charge': return  <Charge {...this.props} updateScreen={updateScreen} sub={subScreen || 'booking'} interactionData={interactionData}/>;
            case 'charging': return <CarInfos charging={true} {...this.props} updateScreen={updateScreen} interactionData={interactionData}/>;
            case 'payment': return <Payment updateScreen={updateScreen}/>;
            case 'ticket': return <Ticket updateScreen={updateScreen}/>;
        }
    }

    render() {
        return (
            <div className="right-section">
                <div className="right-lines" />
                <div className="action-screen-container">
                {this.getScreen()}
                </div>
            </div>
        );
    }

}

export default Actions;

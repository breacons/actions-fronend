import React, { Component } from 'react';
import './App.css';

import Sample from './component/sample';
import Wheel from './component/Wheel';
import SpeedoMeter from './component/SpeedoMeter';
import Map from './component/Map';
import Actions from './component/Actions';

import cover from './img/cover.png'

const api = 'https://nameless-lowlands-57377.herokuapp.com/status';

class App extends Component {
    state = {
        data: {},
        screen: 'info'
    };

    constructor(props) {
        super(props);

        this.updateScreen = this.updateScreen.bind(this)
    }

    processEvent(data) {
        console.log(data)
        let processed = {};


        if (data.events && data.events.length > 0) {

            if (data.events[0].type === 'interaction') {

                const interaction = data.events[0].interaction.id;
                let screen = null;
                let subScreen = ""

                if (interaction === 'ecc-1') {
                    screen = 'charge';
                }

                if (interaction === 'ecc-1-1') {
                    screen = 'charge';
                    subScreen = 'arrived'
                }

                if (interaction === 'highway-1') {
                    screen = 'ticket';
                }

                if (screen) {
                    console.log('push', screen, data)
                    this.setState({ screen, interactionData: data.events[0].interaction, subScreen })
                }
            }
            if (data.events[0].type === 'notification') {
                const notification = data.events[0].notification.id;

                if (notification === 'unplugged'){
                    this.setState({screen: 'payment'})
                }
            }
        }


        this.setState({ data: data })
    }

    componentDidMount() {
        setInterval(() => {
                fetch(api).then(
                    (result) => result.json()
                ).then(response => this.processEvent(response))
                    .catch(error => console.log(error))
            }
            , 1000)

    }

    updateScreen(screen) {
        this.setState({ screen })
    }

    render() {
        const { data, screen, interactionData, subScreen } = this.state;

        console.log('data', data);

        return (
            <div className="App">
                <Wheel />
                <img src={cover} className="cover" />

                <div className="App-header">
                    <Map lat={(data.location && data.location.latitude) || 48.847210}
                         lng={(data.location && data.location.longitude) || 8.547250} />
                    <SpeedoMeter speed={data.speed} />
                    <Actions car={data.car} screen={screen} updateScreen={this.updateScreen}
                             interactionData={interactionData} subScreen={subScreen} />
                </div>
            </div>
        );
    }
}

export default App;

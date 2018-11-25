import React, { Component } from 'react';
import propTypes from 'prop-types';

import './styles.scss';

class Wheel extends Component {
    render() {
        return (
            <div className="wheel" onClick={() => console.log('wheel')}>
            </div>
        );
    }

}

export default Wheel;

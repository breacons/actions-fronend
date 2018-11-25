import React, { Component } from 'react';
import propTypes from 'prop-types';
import MtSvgLines from 'react-mt-svg-lines';
import './styles.scss';

class CircularProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // Size of the enclosing square
        const sqSize = this.props.sqSize;
        // SVG centers the stroke width on the radius, subtract out so circle fits in square
        const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
        // Enclose cicle in a circumscribing square
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        // Arc length at 100% coverage is the circle circumference
        const dashArray = radius * Math.PI * 2;
        // Scale 100% coverage overlay with the actual percent
        const dashOffset = dashArray - dashArray * this.props.percentage / 100;
        const dashOffsetSmall = dashArray - dashArray * 0.02;

        return (
            <MtSvgLines animate={true} duration={500}>
                <svg
                    width={this.props.sqSize}
                    height={this.props.sqSize}
                    viewBox={viewBox}>
                    <defs>
                        <linearGradient id="gradient" x1="50%" y1="0%" x2="0%" y2="50%">
                            <stop offset="0%" stopColor="red" />
                            <stop offset="100%" stopColor="#5eaefd" />
                        </linearGradient>
                    </defs>
                    <circle
                        className="circle-background"
                        cx={this.props.sqSize / 2}
                        cy={this.props.sqSize / 2}
                        r={radius}
                        strokeWidth={`${this.props.strokeWidth}px`} />
                    <circle
                        className="circle-progress"
                        cx={this.props.sqSize / 2}
                        cy={this.props.sqSize / 2}
                        r={radius}
                        strokeWidth={`${this.props.strokeWidth}px`}
                        // Start progress marker at 12 O'Clock
                        transform={`rotate(-290 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
                        style={{
                            stroke: this.props.charging ? 'url(#gradient)' : '#7ef8ff',
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset
                        }} />
                    {this.props.charging &&
                        <circle
                            // stroke="url(#gradient)"
                            className="circle-running"
                            cx={this.props.sqSize / 2}
                            cy={this.props.sqSize / 2}
                            r={radius}
                            strokeWidth={`${this.props.strokeWidth}px`}
                            // Start progress marker at 12 O'Clock
                            // transform={`rotate(-290 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
                            style={{

                                strokeDasharray: dashArray,
                                strokeDashoffset: dashOffsetSmall
                            }} />
                    }

                </svg>
            </MtSvgLines>
        );
    }
}

CircularProgressBar.defaultProps = {
    sqSize: 200,
    percentage: 25,
    strokeWidth: 10
};

export default CircularProgressBar;

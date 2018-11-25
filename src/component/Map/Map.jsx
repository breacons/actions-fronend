import React, { Component } from 'react';
import propTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './styles.scss';
import overlay from '../../img/map_overlay.png';
import carMarker from '../../img/car_marker.png';
import gif from '../../img/kurzor.gif'
import marker from '../../img/Charger_Icon.png'


const CarMarker = ({ text }) => <img src={gif} style={{ marginLeft: -50, marginTop: -50, width: 100 }} />;
const ChargerMarker = () => <img src={marker} style={{ marginLeft: -5, marginTop: -70, width: 20 }} />;

const style = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
];

const createMapOptions = (maps) => {
    return {
        panControl: false,
        mapTypeControl: false,
        draggable: false,
        scaleControl: false,
        scrollwheel: false,
        navigationControl: false,
        streetViewControl: false,
        styles: style
    }
};

const defaultCenter = {
    lat: 60.184412,
    lng: 24.831817
}

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 60.184412,
            lng: 24.831817
        },
        zoom: 16
    };

    render() {
        const center = {
            lat: this.props.lat,
            lng: this.props.lng
        };

        return (
            <div className="left-section">
                <div className="left-lines" />
                <div className="map-container">
                    <img src={overlay} className="map-overlay" height={500} />
                    <GoogleMapReact

                        bootstrapURLKeys={{ key: 'AIzaSyBDLYBWuUo3iTuuZR1yzx2h9HmOYLLMH9s' }}
                        defaultCenter={defaultCenter}
                        center={center}
                        defaultZoom={this.props.zoom}
                        options={createMapOptions}
                    >
                        <CarMarker
                            lat={this.props.lat}
                            lng={this.props.lng}
                            text={'Marker'}
                        />
                        <ChargerMarker
                            lat={48.843140}
                            lng={8.545670}
                            text={'Marker'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }

}

export default Map;

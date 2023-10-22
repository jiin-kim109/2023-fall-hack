import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

function Marker({ text }) {
    return (
        <div>{text}</div>
    );
}

function GoogleMap() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };

    const [markers, setMarkers] = useState([
        {
            lat: defaultProps.center.lat,
            lng: defaultProps.center.lng,
            text: "Sample Marker"
        }
    ]);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    draggable={false}
                >
                    {markers.map((marker, i) => (
                        <Marker
                            key={i}
                            lat={marker.lat}
                            lng={marker.lng}
                            text={marker.text}
                        />
                    ))}
                </GoogleMapReact>
        </div>
    )
}

export default GoogleMap;
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

function Marker({ text }) {
    return (
        <div>{text}</div>
    );
}

function GoogleMap({ data }) {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                    defaultCenter={{
                        lat: data.defaultMapCenterLatitude,
                        lng: data.defaultMapCenterLongitude
                    }}
                    defaultZoom={4}
                    draggable={false}
                >
                    {data.places.map((place, i) => (
                        <Marker
                            key={i}
                            lat={place.Latitude}
                            lng={place.Longitude}
                            text={place.name}
                        />
                    ))}
                </GoogleMapReact>
        </div>
    )
}

export default GoogleMap;
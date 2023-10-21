import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const RowWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    border: 2px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex: 0.5;
  border: 2px;
`;

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function DataTable () {
    return <p>data table</p>
}

function GoogleMap() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                    defaultCenter={{ lat: 59.95, lng: 30.33 }}
                    defaultZoom={11}
                >
                </GoogleMapReact>
        </div>
    )
}

function ResultPage() {
    return (
        <div>
            <p>Result Page</p>
            {/* <GoogleMap /> */}
            <RowWrapper>
              <ColumnWrapper>
                <DataTable />
              </ColumnWrapper>
              <ColumnWrapper>
                <GoogleMap />
              </ColumnWrapper>
            </RowWrapper>
        </div>
    );
}

export default ResultPage;

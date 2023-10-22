import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import GoogleMap from '../components/GoogleMap';
import useChatGpt from '../hooks/useChatGpt';
import { Button } from '@mui/base';

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
  flex-direction: column;
  align-items: start;
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

function ResultPage() {
    const [messages, sendQuestion] = useChatGpt();

    return (
        <div>
            <RowWrapper>
              <ColumnWrapper>
                <h1>Best Places</h1>
                <DataTable />
                <Button onClick={() => sendQuestion(`
                recommend me places in South Korea for a trip in the following format:
                places: [
                Name:
                Address:
                Longitude:
                Latitude:
                ],
                DefaultMapCenterLongitude:
                DefaultMapCenterLatitude:
                DefaultMapZoom:
                `)}>test</Button>
                <p>{JSON.stringify(messages)}</p>
              </ColumnWrapper>
              <ColumnWrapper>
                <GoogleMap />
              </ColumnWrapper>
            </RowWrapper>
        </div>
    );
}

export default ResultPage;

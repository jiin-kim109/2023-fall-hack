import React from 'react';
import GoogleMapReact from 'google-map-react';
import { DataGrid } from '@material-ui/data-grid';
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
    { field: 'id', headerName: '#', width: 90 },
    {
      field: 'firstName',
      headerName: 'country',
      width: 130,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Region',
      width: 130,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Budget',
      type: 'number',
      width: 130,
      editable: true,
    }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null }
  ];

function DataTable () {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    )
}

function GoogleMap() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' }}
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

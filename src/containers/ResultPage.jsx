import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import GoogleMap from '../components/GoogleMap';
import useChatGpt from '../hooks/useChatGpt';
import { Button } from '@mui/base';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import LoadingScreen from '../components/Loading';
import useQuestionnaireState from '../hooks/useQuestionnaireState';

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
  flex-direction: column;
  align-items: start;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
`

function DataTable ({ data }) {
    return (
      <TableWrapper>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {data.places.map((place, id) => (
            <ListItem key={id} disablePadding>
              <ListItemButton>
              <ListItemText primary={place.name} />
              <ListItemText primary={place.address} />
            </ListItemButton>
            </ListItem>
          ))}
        </List>
      </TableWrapper>
    )
}

function ResultPage() {
    const [isLoading, setLoading] = useState(true);
    const [gptResponse, sendQuestion] = useChatGpt();
    const [questions, _] = useQuestionnaireState();

    useEffect(() => {
      async function queryChatGpt() {
        const queryToGpt = questions.questions.join('.\n') + `
        recommend me places to travel in the following format in strict json:
          {
          "places": [
          "name":string
          "Address":string
          "Longitude":number
          "Latitude":number
          ],
          "defaultMapCenterLongitude":number
          "defaultMapCenterLatitude":number
          "defaultMapZoom":number
          }

          surround the json snippet with \`\`\`json at the beginning and \`\`\` at the end
        `;

        const res = await sendQuestion(queryToGpt);
        setLoading(false);
      }
      queryChatGpt();
    }, []); 

    console.log(gptResponse);

    return (
      isLoading ? <LoadingScreen /> : (
        <div>
            <RowWrapper>
              <ColumnWrapper>
                <h1>Best Places</h1>
                <DataTable data={JSON.parse(
                    gptResponse.substring(
                      gptResponse.indexOf("```json") + 7, 
                      gptResponse.lastIndexOf("```")
                    ))} />
              </ColumnWrapper>
              <ColumnWrapper>
                <GoogleMap data={JSON.parse(
                    gptResponse.substring(
                      gptResponse.indexOf("```json") + 7, 
                      gptResponse.lastIndexOf("```")
                    ))} />
              </ColumnWrapper>
            </RowWrapper>
        </div>
      )
    );
}

export default ResultPage;

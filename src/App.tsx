import React from 'react';
import './App.css';
import ApiKey, { ApiKeyData } from './components/ApiKey';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import SheetId from 'components/SheetId';
import useLocalforage from 'hooks/useLocalforage';
import SheetData from 'components/SheetData';

function App() {
  const [apiKey] = useLocalforage<ApiKeyData>('apiKey');
  const [sheetId] = useLocalforage<string>('sheetId');

  return (
    
    <div className="App">
      <Jumbotron className="text-center">
        <h1>Translation parser</h1>
      </Jumbotron>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>API Key (json file)</Form.Label>
            <Form.Text className="text-muted">
              <ol>
                <li>Go to: https://console.developers.google.com/ and create a project</li>
                <li>Add the Google Sheets API</li>
                <li>Create a service account</li>
                <li>Create a new JSON key under this service account and upload this key here</li>
                <li>Ensure share the google sheet to the the e-mail address of the service account</li>
              </ol>
            </Form.Text>
            <ApiKey />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sheet ID</Form.Label>
            <Form.Text className="text-muted">
              {`Copy from https://docs.google.com/spreadsheets/d/<SHEET ID>`}
            </Form.Text>
            <SheetId />
          </Form.Group>
        </Form>
      </Container>
      <Container>
        { (apiKey && sheetId) && (
          <SheetData sheetId={sheetId} credentials={apiKey.credentials} />
        )}
      </Container>
        <p>
        </p>       
    </div>
  );
}

export default App;

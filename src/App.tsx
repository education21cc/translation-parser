import React, { useState } from 'react';
import './App.css';
import ApiKey, { ApiKeyData } from './components/ApiKey';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import SheetId from 'components/SheetId';
import SheetData from 'components/SheetData';
import { Button, Alert } from 'react-bootstrap';

function App() {
  const [apiKey, setApiKey] = useState<ApiKeyData|null>();
  const [sheetId, setSheetId] = useState<string|null>();

  const [sheetRead, setSheetRead] = useState(false);
  const [showError, setShowError] = useState(false);


  const handleReadSheet = () => {

    if (!(apiKey && sheetId)) {
      setShowError(true);
      setSheetRead(false);
      return;
    }
    setShowError(false);
    setSheetRead(true);
  }

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
            <ApiKey onChange={setApiKey}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sheet ID</Form.Label>
            <Form.Text className="text-muted">
              {`Copy from https://docs.google.com/spreadsheets/d/<SHEET ID>`}
            </Form.Text>
            <SheetId onChange={setSheetId}/>
          </Form.Group>
        </Form>
        { (!sheetRead || !apiKey || !sheetId ) && (
          <Button onClick={handleReadSheet}>
            Read sheet!
          </Button>
        )}
        { showError && (
          <Alert variant="danger" className="mt-3" onClose={() => setShowError(false)} dismissible>
              Please upload a API key json and fill out the sheet ID
          </Alert>
        )}
      </Container>
      <Container>
        { (apiKey && sheetId && sheetRead) && (
          <SheetData sheetId={sheetId} credentials={apiKey.credentials} />
        )}
      </Container>
        <p>
        </p>       
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import ApiKey, { ApiKeyData } from './components/ApiKey';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import SheetId from 'components/SheetId';
import SheetData from 'components/SheetData';
import { Button, Alert, Tabs, Tab } from 'react-bootstrap';
import './App.css';
import Reader from 'components/Reader';

function App() {
  const [apiKey, setApiKey] = useState<ApiKeyData|null>();
  const [sheetId, setSheetId] = useState<string|null>();

  const [sheetRead, setSheetRead] = useState(false);
  const [error, setError] = useState<string|null>();


  const handleReadSheet = () => {

    if (!(apiKey && sheetId)) {
      setErrorText(" Please upload a API key json and fill out the sheet ID");
      return;
    }
    setError(null);
    setSheetRead(true);
  }

  const setErrorText = (text: string|null) => {
    if (text !== null){
      setSheetRead(false);
    }
    setError(text);
  }

  return (
    
    <div className="App">
      <Jumbotron className="text-center">
        <h1>Translation parser</h1>
      </Jumbotron>

      <Container>
        <Tabs defaultActiveKey="sheets2Json" id="tab" className="mb-4">
          <Tab eventKey="sheets2Json" title="Google sheets -> JSON">
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
                <SheetId onChange={setSheetId} />
              </Form.Group>
            </Form>
            { error && (
              <Alert variant="danger" className="mt-3" onClose={() => setErrorText(null)} dismissible>
                {error}
              </Alert>
            )}
            { (!sheetRead || !apiKey || !sheetId ) && (
              <Button onClick={handleReadSheet}>
                Read sheet!
              </Button>
            )}
            { (apiKey && sheetId && sheetRead) && (
              <SheetData 
                sheetId={sheetId} 
                credentials={apiKey.credentials}
                setError={setErrorText}
              />
            )}
          </Tab>

          <Tab eventKey="json2Sheets" title="JSON -> Google sheets  ">
            <Reader/>
          </Tab>
        </Tabs>    

      </Container>
    </div>
  );
}

export default App;

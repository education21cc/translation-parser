import React from 'react';
import './App.css';
import ApiKey from './components/ApiKey';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    
    <div className="App">
      <Jumbotron>
        <h1>Translation parser</h1>
      </Jumbotron>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>API Key (json file)</Form.Label>
            <ApiKey />
            <Form.Text className="text-muted">
              todo: provide instructions
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sheet ID</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              todo: provide instructions
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
        <p>
        </p>       
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

interface Json {
    translations: [{key: string, value: string}]
}
const Reader = () => {
    const [json, setJson] = useState<Json>();
    const [output, setOutput] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let data = null;
        try { 
            data = JSON.parse(event.target.value);
        }
        catch (e) {
            // Lets try wrapping it in braces
            data = JSON.parse(`{${event.target.value}}`)
        }
        setJson(data);
    }

    const handleReadSheet = () => {
        if (!json) return;
        const asString = json.translations.reduce((acc, value) => {
            acc += `${value.key};${value.value.replaceAll('\n', '\\n')}\n`;
            return acc;
        }, "");
        setOutput(asString);
    }

    return (
        <>
        <Form.Group>
            <Form.Label>Reader</Form.Label>
            <Form.Text className="text-muted">
              {`Paste translations JSON here`}
            </Form.Text>
            <Form.Control as="textarea" rows={9} onChange={handleChange} />
            <Button onClick={handleReadSheet}  className="mt-3">
                Read JSON
            </Button>
            <Form.Text className="text-muted">
              {`Output`}
            </Form.Text>
            <Form.Control as="textarea" rows={9} className="muted" value={output} />
            <Alert variant="info">
                Paste in google sheets <br />
                Make sure to choose "Split text to Column, Seperator: semicolon"...
            </Alert>

          </Form.Group>

          </>
    );
}

export default Reader;

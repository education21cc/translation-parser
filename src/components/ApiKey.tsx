import React, { useState } from "react";
import useLocalforage from "../hooks/useLocalforage";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

interface ApiKeyData {
    file: string;
    json: string;
}

const ApiKey = () => {
    const [error, setError] = useState<string|null>();
    const [json, setJson] = useLocalforage<ApiKeyData>('json');
    //console.log(json);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.[0];
        if (!file) return null;
        const reader = new FileReader();
        const loadComplete = (readEvent: ProgressEvent<FileReader>) => {
            // validate! 
            const parsed = JSON.parse(readEvent.target?.result as string);
            if (parsed.type !== "service_account") {
                setError("Not a valid JSON file!")
            }
            const data: ApiKeyData = {
                file: file.name,
                json: readEvent.target?.result as string
            }
            setJson(data);            
        };
        
        reader.addEventListener("load", loadComplete);
        reader.readAsText(file);
    }

    const handleClear = () => {
        setJson(null);
    }

    if (error) {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    value={ error }
                    plaintext
                />
                <InputGroup.Append>
                <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        );    
    }

    if (json) {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    value={ json.file }
                    plaintext
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleClear}>Clear</Button>
                </InputGroup.Append>
            </InputGroup>
        );    
    }

    return (
        <Form.File type="file" accept=".json" onChange={handleChange}/>
    );
}

export default ApiKey;
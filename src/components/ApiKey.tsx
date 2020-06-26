import React, { useState, useEffect } from "react";
import useLocalforage from "../hooks/useLocalforage";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { ServiceAccountCredentials } from "google-spreadsheet";

export interface ApiKeyData {
    file: string;
    credentials: ServiceAccountCredentials;
}

interface Props {
    onChange: (value: ApiKeyData) => void;
}

const ApiKey = (props: Props) => {
    const [error, setError] = useState<string|null>();
    const [apiKey, setApiKey] = useLocalforage<ApiKeyData>('apiKey');
    const {onChange} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.[0];
        if (!file) return null;
        const reader = new FileReader();
        const loadComplete = (readEvent: ProgressEvent<FileReader>) => {
            // validate! 
            try {
                const parsed = JSON.parse(readEvent.target?.result as string);
                if (parsed.client_email === undefined || parsed.private_key === undefined) {
                    setError("Not a valid JSON file!")
                }
                // if (parsed.type !== "service_account") {
                //     setError("Not a valid JSON file!")
                // }
                const data: ApiKeyData = {
                    file: file.name,
                    credentials: parsed as ServiceAccountCredentials
                }
                setApiKey(data);
            }
            catch (e) {
                setError("Error reading file. Is it a API json file?")
            }
        };
        
        reader.addEventListener("load", loadComplete);
        reader.readAsText(file);
    }

    useEffect(() => {
        if (apiKey) {
            onChange(apiKey);
        }
    }, [apiKey, onChange])

    const handleClear = () => {
        setApiKey(null);
    }

    if (error) {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder={error}
                    className="text-danger"
                    readOnly
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={handleClear}>Clear</Button>
                </InputGroup.Append>
            </InputGroup>
        );    
    }

    if (apiKey) {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder={apiKey.file}
                    readOnly
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
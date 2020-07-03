import { GoogleSpreadsheet, ServiceAccountCredentials, GoogleSpreadsheetRow } from 'google-spreadsheet';
import React, { useEffect, useState } from 'react';
import { Alert, Card, Form, Button } from 'react-bootstrap';

interface Props {
    sheetId: string;
    credentials: ServiceAccountCredentials;
    setError: (error: string|null) => void;
}

const SheetData = (props: Props) => {
    const {setError} = props;
    const [doc, setDoc] = useState<GoogleSpreadsheet>()
    const [selectedSheet, setSelectedSheet] = useState<string>();
    const [languages, setLanguages] = useState<string[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<string>();

    useEffect(() => {
        const fetch = async () => {
            try {
                const doc = new GoogleSpreadsheet(props.sheetId);
                await doc.useServiceAccountAuth(props.credentials);
                await doc.loadInfo();
                
                setSelectedSheet(doc.sheetsByIndex[0].sheetId);
                setDoc(doc);
            }
            catch (e) {
                //debugger;
                if (!e.response) {
                    setError(`Generic error!\n${e}`);
                    return;
                }
                switch (e.response.status) {
                    case 403: 
                        setError(`Credentials invalid. \nEnsure '${props.credentials.client_email}' has read access to the sheet.`);
                        break;
                    case 404: 
                        setError("Invalid sheet id");
                        break;
                }
            }
        };
        fetch();
    }, [props.credentials, props.sheetId, setError]);
    
    useEffect(() => {
        if (!doc || selectedSheet === undefined) { return };
        const getRows = async () => {
            await doc.sheetsById[selectedSheet].loadHeaderRow();

            const headersExceptFirst = doc.sheetsById[selectedSheet].headerValues.filter((v, i) => i > 0);
            setLanguages(headersExceptFirst);
        }
        getRows();
    }, [doc, selectedSheet]);
    

    useEffect(() => {
        // If list of languages has changed and the previous value is not found, reset to first value
        if (!selectedLanguage || languages.indexOf(selectedLanguage) === -1) {
            setSelectedLanguage(languages[0]);
        }        
    }, [languages, selectedLanguage])

    const handleSheetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSheet(event.target.value)
    }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    }

    const handleDownload = () => {
        const download = async () => {
            if (!doc || selectedLanguage === undefined || selectedSheet === undefined) return;
            const keyName = doc.sheetsById[selectedSheet].headerValues[0];  // should be just 'key' but you never know
            const rows = await doc.sheetsById[selectedSheet].getRows();
            const obj = rows.reduce((acc: { key: string, value: string}[], value: GoogleSpreadsheetRow) => {
                if (value[keyName] !== undefined) {
                    acc.push({
                        key: value[keyName],
                        value: value[selectedLanguage]
                    });
                }
                return acc;
            }, []);
            
            const a = document.createElement('a');
            const text = JSON.stringify(obj);
            const filename = `${doc.sheetsById[selectedSheet].title}_${selectedLanguage}.json`;
            a.setAttribute('href', 'data:text/json;charset=utf-8,'+encodeURIComponent(text));
            a.setAttribute('download', filename);
            a.click()
        }
        download();
    }
    if (!doc || selectedSheet === undefined) {
        return (
            <Alert variant="info">Loading...</Alert>
        )
    }

    return (
        <Card>
            <Card.Body>
                <Form.Group>
                    <Form.Label>Game</Form.Label>
                    <Form.Control as="select" onChange={handleSheetChange}>
                        {doc.sheetsByIndex.map(sheet => (
                            <option key={sheet.sheetId} value={sheet.sheetId}>{sheet.title}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Control as="select" onChange={handleLanguageChange}>
                        {languages.map(lang => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                {  (selectedLanguage !== undefined && selectedSheet !== undefined) && (
                    <Button onClick={handleDownload}>
                        Download
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default SheetData;
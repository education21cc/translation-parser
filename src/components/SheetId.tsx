import React, { useState } from "react";
import useLocalforage from "../hooks/useLocalforage";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';


const SheetId = () => {
    const [sheetId, setSheetId] = useLocalforage<string>('sheetId');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSheetId(event.target.value);        
    }


    return (
        <Form.Control type="text" value={sheetId || ""} onChange={handleChange}/>
    );
}

export default SheetId;
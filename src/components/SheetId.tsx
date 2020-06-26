import React, { useEffect } from "react";
import useLocalforage from "../hooks/useLocalforage";
import { Form } from 'react-bootstrap';

interface Props {
    onChange: (value: string) => void;
}
const SheetId = (props: Props) => {
    const [sheetId, setSheetId] = useLocalforage<string>('sheetId');
    const {onChange} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSheetId(event.target.value);
        props.onChange(event.target.value);
    }

    useEffect(() => {
        if (sheetId) {
            onChange(sheetId);
        }
    }, [sheetId, onChange])

    return (
        <Form.Control type="text" value={sheetId || ""} onChange={handleChange}/>
    );
}

export default SheetId;
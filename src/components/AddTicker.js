import { useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const AddTicker = ({ onAdd }) => {
    const [ticker, setTicker] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!ticker) {
            alert('please fill in the empty inputs');
            return;
        }
        console.log(ticker);
        onAdd({ ticker });
        setTicker('');
    };

    return (
        <>
            <Form className="header" onSubmit={onSubmit}>
                <FloatingLabel
                    label="Ticker"
                    className="mb-3"
                >
                    <Form.Control 
                        value={ticker} 
                        onChange={(e) => setTicker(e.target.value)} 
                        type="text" 
                        placeholder=" " 
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    );
};

export default AddTicker;

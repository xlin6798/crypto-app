import { useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { MdAddCircle } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddForm({ onAdd }) {
    const [ticker, setTicker] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!ticker) {
            alert('please enter a ticker in lower case');
            return;
        }
        onAdd({ticker});
        setTicker('');
    };
    return (
        <>
            <Form className="header" onSubmit={onSubmit}>
                <Row className="align-items-center">
                    <Col>
                        <FloatingLabel
                            label="Ticker Symbol"
                            className="mb-3"
                        >
                            <Form.Control
                                value={ticker}
                                onChange={(e) => setTicker(e.target.value)}
                                type="text"
                                placeholder=" "
                            />
                        </FloatingLabel>
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

function AddTicker({ onAdd }) {
    return (
        <>
            <OverlayTrigger
                trigger="click"
                placement="left"
                overlay={
                    <Popover>
                        <Popover.Header as="h3"> Add Ticker </Popover.Header>
                        <Popover.Body>
                            <AddForm onAdd={onAdd}  />
                        </Popover.Body>
                    </Popover>
                }
            >

                <Button className="p-0 bg-transparent btn-add position-fixed rounded-circle border-0"> <MdAddCircle className="text-dark icon" /> </Button>
            </OverlayTrigger>
        </>
    );
}

export default AddTicker;

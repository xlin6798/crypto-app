import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FaTimes } from "react-icons/fa"

function Ticker({ ticker, onDelete, id }) {
    return (
        <Col sm={6} md={4} xl={4}>
            <Card className={`rounded p-3 mb-3 text-center ticker-${id%3}`}>
                <Card.Body >
                    <Card.Title> {ticker.id} ({ticker.symbol})
                        <FaTimes
                            onClick={() => onDelete(ticker.symbol)}
                        />
                    </Card.Title>
                    <Card.Text>
                        <p className="fs-2 fw-bold"> ${(+ticker.current_price).toFixed(2)} </p>
                        <p> {(+ticker.low_24h).toFixed(2)} Low</p>
                        <p> {(+ticker.high_24h).toFixed(2)} High</p>
                        <p> {(+ticker.price_change_percentage_1h_in_currency).toFixed(2)}% 1hr </p>
                        <p> {(+ticker.price_change_percentage_24h_in_currency).toFixed(2)}% 24hr </p>
                        <p> {(+ticker.price_change_percentage_7d_in_currency).toFixed(2)}% 7days </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Ticker;

import Ticker from "./Ticker";
import Row from "react-bootstrap/Row";

function Tickers({ tickers, onDelete, id }) {
    return (
        <Row>
            {tickers.map((ticker) => (
                <Ticker key={ticker.symbol} 
                ticker={ticker} 
                id={id++}
                onDelete={onDelete}/>
            ))}
        </Row>
    );  
}

export default Tickers

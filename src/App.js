import Tickers from "./components/Tickers";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import AddTicker from "./components/AddTicker";

function App() {
    let id = 0;
    const [showTask, setShowTask] = useState(false);
    const [tickers, setTickers] = useState("");

    const [loading, setLoading] = useState(true);

    const [symbols, setSymbols]  = useState(["etc", "btc", "ltc"])

    function saveData(){
        var save = symbols;
        localStorage.setItem("save", JSON.stringify(save));
    }

    function loadData(){
        setLoading(false);
        var save = JSON.parse(localStorage.getItem("save"));
        if (save !== null && save !== undefined)
            setSymbols(save);
    }
    function addTicker(symbol) {
        setSymbols(symbols.concat(symbol.ticker));
    }

    function deleteTicker(symbol) {
        setSymbols(symbols.filter((ticker) => ticker !== symbol));
    }

    function fetchData() {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d")
            .then(response => {
                const wanted = symbols;
                const result = response.data.filter(ticker => wanted.includes(ticker.symbol));
                setTickers(result);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        /*if (loading) {
            loadData();
        }*/
        fetchData();
    });


    const title = "Crypto";

    return (
        <Container className="align-content-center">
            <Header onAdd={() => setShowTask(!showTask)}  title={title} />
            {showTask && <AddTicker onAdd={addTicker} />}
            {symbols.length > 0 ? (
                <Tickers onDelete={deleteTicker} id={id} tickers={tickers} />
            ) : (
                'No crypto to show'
            )}
        </Container>
    );
}

export default App;

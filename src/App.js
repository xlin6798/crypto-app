import Header from "./components/Header";
import Tickers from "./components/Tickers";
import AddTicker from "./components/AddTicker";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
    let id = 0;

    const [tickers, setTickers] = useState(
        [
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7d: "0",
            },
        ]
    );

    const [symbols, setSymbols] = useState(
        (JSON.parse(localStorage.getItem("save")) !== null && JSON.parse(localStorage.getItem("save")) !== undefined)
            ? JSON.parse(localStorage.getItem("save"))
            : ["etc", "btc", "ltc", "usdt", "ada", "bnb", "xrp", "sol", "usd", "dot"]
    );

    function addTicker(symbol) {
        setSymbols(symbols.concat(symbol.ticker.toLowerCase()));
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
        fetchData();
        localStorage.setItem("save", JSON.stringify(symbols));
    });


    const title = "Crypto Tracker App";

    return (
        <>
            <Header title={title} />
            <AddTicker onAdd={addTicker}></AddTicker>
            <Container className="align-content-center pt-5">
                {symbols.length > 0 ? (
                    <Tickers onDelete={deleteTicker} id={id} tickers={tickers} />
                ) : (
                    'No crypto to show'
                )}
            </Container>
            <Footer />
        </>

    );
}

export default App;

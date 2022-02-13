import { useState, useEffect } from "react";

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(()=> {
      fetch("https://api.coinpaprika.com/v1/tickers").then(response => response.json()).then(json => {
        setCoins(json);
        setLoading(false);
    });
    }, [])
    return(
      <div>
        <h1>Coins</h1>
        {loading ? <strong>Loading</strong> : <select>
          {coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}) : ${Math.trunc(10 * coin.quotes.USD.price)/10}</option>)}
        </select>}
  
      </div>
    )
  }

  export default Coin;
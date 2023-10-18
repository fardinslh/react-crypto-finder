import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./coinDetail.css";

const CoinDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const baseUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en&precision=5";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseUrl);
      setData(response);
    };

    fetchData();
  }, []);

  //   console.log(id);
  //   console.log(data.data);

  const chosenCoin = data?.data?.filter((coin) => coin.id === id);

  return (
    <div className="coin-detail-container">
      {chosenCoin ? (
        <>
          <img src={chosenCoin[0].image} alt="coin-logo" />
          <h3>Name : {chosenCoin[0].name}</h3>
          <h3>Symbol : {chosenCoin[0].symbol}</h3>
          <h3>Current Price : ${chosenCoin[0].current_price}</h3>
          <h3>Marketcap Rank : {chosenCoin[0].market_cap_rank}</h3>
        </>
      ) : (
        ""
      )}
      <a href="/">Go to Home</a>
    </div>
  );
};

export default CoinDetails;

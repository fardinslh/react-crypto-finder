import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home.css";

import Coins from "../components/Coins";
import { getCoins } from "../store/coinSlice";

const Home = () => {
  const [searchResult, setSearchResult] = useState(null);
  const { data } = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, []);

  const searchHandler = (e) => {
    try {
      const searchedValue = e.target.value;
      const searchResult = data.filter((coin) =>
        coin.id.toLowerCase().includes(searchedValue.toLowerCase())
      );
      setSearchResult(searchResult);
    } catch (error) {
      <div>There is a error for this request `${error}`</div>;
    }
  };

  return (
    <div className="container">
      <h1>Coin Info</h1>
      <input
        placeholder="Search Here..."
        type="text"
        className="searchbar"
        onChange={searchHandler}
      />
      {searchResult ? (
        <Coins data={searchResult} />
      ) : (
        <Coins data={data} />
      )}
    </div>
  );
};

export default Home;

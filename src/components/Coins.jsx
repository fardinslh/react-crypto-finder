import React from "react";
import Coin from "./Coin";
import { useState } from "react";

const Coins = ({ data }) => {
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <>
      {data?.map((coin, index) => {
        return (
          <Coin
            key={index}
            data={coin}
            favoriteList={favoriteList}
            setFavoriteList={setFavoriteList}
          />
        );
      })}
    </>
  );
};

export default Coins;

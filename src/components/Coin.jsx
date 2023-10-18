import React, { useEffect, useState } from "react";
import "./coin.css";

const checkIsFavorited = (list, targetId) =>
  list.some((item) => item.id === targetId);

function removeElementFromArray(arr, id) {
  const index = arr.findIndex((item) => item.id === id);

  if (index !== -1) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  return arr;
}

const Coin = ({ data, favoriteList, setFavoriteList }) => {
  const image = data.image;

  const isFavorited = checkIsFavorited(favoriteList, data.id);

  useEffect(() => {
    let localStorageList =
      JSON.parse(localStorage.getItem("favoritesList")) || [];
    setFavoriteList(localStorageList);
  }, []);

  const handleFavorite = (product, isFavorited) => {
    if (!isFavorited) {
      let newFavoriteList = [...favoriteList, product];
      console.log("favList", favoriteList);
      console.log(newFavoriteList);
      localStorage.setItem("favoritesList", JSON.stringify(newFavoriteList));
      setFavoriteList(newFavoriteList);
    } else {
      const newArray = removeElementFromArray(favoriteList, product.id);
      localStorage.setItem("favoritesList", JSON.stringify(newArray));
      setFavoriteList(newArray);
    }
  };

  // console.log("favorite : ", isFavorited);

  return (
    <>
      <a className="link" href={`/coin/${data.id}`}>
        <div className="coin-container">
          <img className="image" src={image} alt="coin-img" />
          <div>{data.id}</div>
        </div>
      </a>
      <button onClick={() => handleFavorite(data, isFavorited)}>
        {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </>
  );
};

export default Coin;

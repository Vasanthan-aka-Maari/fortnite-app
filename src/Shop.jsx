import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Shop.css";

function Shop() {
  useEffect(() => {
    fetchData();
  }, []);

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    console.log(items);
    setItems(items.data);
  };
  console.log(items.data);

  return (
    <div className="shop">
      {items.map((item) => {
        return (
          <Card
            name={item.item.name}
            image={item.item.images.icon}
            description={item.item.description}
            rating={item.item.ratings.avgStars}
            type={item.item.type}
          />
          // <h3>{item.item.name}</h3>
        );
      })}
    </div>
  );
}

export default Shop;

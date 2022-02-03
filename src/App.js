import './App.css';
import React, {useState} from "react";
import {ShoppingList} from "./components/ShoppingList";

function App() {
  const itemList = [
    {
      name: "Milk",
      aisle: "opt1",
      category: "opt6",
    },
    {
      name: "Bread",
      aisle: "opt2",
      category: "opt2",
    },
    {
      name: "Eggs",
      aisle: "opt3",
      category: "opt8",
    },
  ];

  return (
    <ShoppingList itemList={itemList}/>
  )
}

export default App;

//table, filter, card, bulk add
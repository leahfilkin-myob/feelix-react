import './App.css';
import React, { useState } from "react";
import {ShoppingList} from "./components/ShoppingList"
import {ItemAdder} from "./components/ItemAdder"

function App() {
    const [items, setItems] = useState([
        {
            name: "Milk",
            checked: false,
        },
        {
            name: "Bread",
            checked: false,
        },
        {
            name: "Eggs",
            checked: false,
        },
    ]);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const tickItem = (itemIndex) => {
        let updatedItems = [...items];
        updatedItems[itemIndex].checked = true;
        setItems(updatedItems);
    }

      return (
        <div>
          <h1 id="mainHeading">My Shopping List</h1>
          <ItemAdder addItemCallback={addItem} />
          <ShoppingList items={items} tickItemCallback={tickItem}/>
        </div>);
  }

export default App;


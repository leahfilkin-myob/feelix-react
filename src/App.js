import './App.css';
import React, { useState } from "react";
import {Items} from "./components/Items"
import {ItemAdder} from "./components/ItemAdder"
import {ShoppingList} from "./components/ShoppingList";

function App() {
    const itemList =[
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
    ];

    return (
        <ShoppingList itemList={itemList}/>
    )
}

export default App;


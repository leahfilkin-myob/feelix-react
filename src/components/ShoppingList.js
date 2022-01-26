import {ItemAdder} from "./ItemAdder";
import {Items} from "./Items";
import React, {useState} from "react";


export function ShoppingList({itemList}) {

    const [items, setItems] = useState(itemList);

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
            <Items items={items} tickItemCallback={tickItem}/>

        </div>
    );
}
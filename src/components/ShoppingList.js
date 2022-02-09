import {Items} from "./Items";
import React, {useState} from "react";
import {Columns, PageHead} from "@myob/myob-widgets";
import '@myob/myob-styles/dist/styles/myob-clean.css';
import {DogFact} from "./DogFact";

export function ShoppingList({itemList}) {

  const [items, setItems] = useState(itemList);

  const rawStateDataObject = {
    item: "",
    aisle: undefined,
    category: undefined,
  };

  const addItem = (newData) => {
    const {id, ...rawData} = newData;
    setItems([
        ...items,
        {
          ...rawStateDataObject,
          ...rawData
        }
      ]
    );
  }

  const tickItem = (index) => {
    let updatedItems = [...items];
    setItems(
      updatedItems.filter((value, itemIndex) => itemIndex !== index)
    );
  }

  const changeItem = (index, name, value) => {
    const newItem = [...items];

    if (typeof name === "object") {
      newItem[index] = {
        ...newItem[index],
        ...name
      };
    } else {
      newItem[index][name] = value;
    }
    setItems(newItem);
  }

  return (
    <Columns alignX="center">
      <Columns.Column span="6">
        <div className="mainHeading">
          <PageHead title="My Shopping List"></PageHead>
        </div>
        <Items
          tickItemCallback={tickItem}
          addItemCallback={addItem}
          changeItemCallback={changeItem}
          items={items}
        />

        <DogFact></DogFact>

      </Columns.Column>
    </Columns>
  );
}
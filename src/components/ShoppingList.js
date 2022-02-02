import {ItemAdder} from "./ItemAdder";
import {Items} from "./Items";
import React, {useState} from "react";
import {Button, Columns, LineItemTable, PageHead, Select, TextArea} from "@myob/myob-widgets";
import '@myob/myob-styles/dist/styles/myob-clean.css';
import {ShoppingListTable} from "./ShoppingListTable";

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
/*        <Columns alignX="center">
            <Columns.Column span="4">
                <div className="mainHeading">
                    <PageHead title="My Shopping List"></PageHead>
                </div>
                <ItemAdder addItemCallback={addItem}/>
                <Columns alignX="center">
                    <Columns.Column span="6">
                        <Items items={items} tickItemCallback={tickItem}/>
                    </Columns.Column>
                </Columns>
            </Columns.Column>
        </Columns>*/

          <Columns alignX="center">
              <Columns.Column span="6">
                <div className="mainHeading">
                  <PageHead title="My Shopping List"></PageHead>
                </div>
          <ShoppingListTable></ShoppingListTable>
              </Columns.Column>
          </Columns>


        /*</Columns>
        <div className="mainHeading">
            <PageHead className="mainHeading" title="My Shopping List"></PageHead>
        </div>
            <Columns alignX="center">
                <Columns.Column span="7">
                    <ItemAdder addItemCallback={addItem} />
                </Columns.Column>
            </Columns>
            <Columns alignX="center">
                <Columns.Column span="3">
                    <Items items={items} tickItemCallback={tickItem}/>
                </Columns.Column>
            </Columns>
        </div>*/
    );
}
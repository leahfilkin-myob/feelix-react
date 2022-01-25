import {Item} from "./Item";
import React from "react";

export function ShoppingList(props) {
    return (
        <div id='optionsSection' className='optionsFlex'>
            {props.items.map((item, i) => (
                <Item key={i} tickItemCallback={props.tickItemCallback} name={props.items[i].name} isChecked={props.items[i].checked} index={i}/>
            ))}
        </div>);
}

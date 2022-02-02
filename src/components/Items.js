import {Item} from "./Item";
import React from "react";
import '@myob/myob-styles/dist/styles/myob-clean.css';


export function Items(props) {
    return (
        <>
            {props.items.map((item, i) => (
                <Item key={i} tickItemCallback={props.tickItemCallback} name={props.items[i].name}
                      isChecked={props.items[i].checked} index={i}/>
            ))}
        </>);
}

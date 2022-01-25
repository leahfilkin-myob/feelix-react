import React, {useState} from "react";

export function ItemAdder({addItemCallback}) {

    const [inputValue, setInputValue] = useState("");
    function handleClick() {
        if (inputValue.length > 1) {
            addItemCallback({
                name: inputValue,
                checked: false
            });
        }
    }

    return (
        <div id="addItemBox" className="justifyWithSpaceBetween">
            <label htmlFor="addItem">What would you like to add?</label>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} id="addItem" name="addItem"/>
            <button onClick={() => handleClick()} className="addButton"> Add me!</button>
        </div>
    );
}
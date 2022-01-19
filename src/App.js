import './App.css';
import React, { useState } from "react";

function Item(props) {

    return (
      <div className={props.isChecked? 'option ticked' : 'option'}>
        <p>{props.name}</p>
        <button onClick={() => props.tickItemCallback(props.index)} className='tickButton'>Tick!</button>
      </div>
  );
}

function ItemAdder(props) {

  const [inputValue, setInputValue] = useState("");
  function handleClick() {
    if (inputValue.length > 1) {
        props.addItemCallback({
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
          <ItemAdder addItemCallback={addItem}/>
            <div id='optionsSection' className='optionsFlex'>
                {items.map((item, i) => (
                    <Item key={i} tickItemCallback={tickItem} name={items[i].name} isChecked={items[i].checked} index={i}/>
                ))}
            </div>
        </div>);
  }

export default App;


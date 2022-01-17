import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import React, { useState } from "react";

const items = [
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

function Item(props) {
  const [isTicked, setTicked] = useState(false);


  const updateItem = () => {
    items[props.index].checked = true;
    setTicked(true);
  };

  return (
      <div className={isTicked? 'option ticked' : 'option'}>
        <p>{props.name}</p>
        <button onClick={() => updateItem()} className='tickButton'>Tick!</button>
      </div>
  );
}

function ItemAdder() {

  const [inputValue, setInputValue] = useState("")
  function handleClick() {
    if (inputValue.length > 1) {
      items.push({name: inputValue, checked: false});
    }
    console.log(items);
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

  return (
<div>
  <h1 id="mainHeading">My Shopping List</h1>

  <ItemAdder/>
  <div id='optionsSection' className='optionsFlex'>
    {items.map((item, i) => (
        <Item key={i} name={items[i].name} isChecked={items[i].checked} index={i}/>
    ))}
  </div>


</div>);}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;


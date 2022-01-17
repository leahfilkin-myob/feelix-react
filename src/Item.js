import './App.css';
import ReactDOM from "react-dom";
import React, { useState } from "react";
import {Component} from "react/cjs/react.production.min";


export class Item extends Component({name, isChecked}) {

    render() {
        const [isTicked, setTicked] = useState(false);

        return (

        <div className={isTicked? 'option ticked' : 'option'}>
                <p>{item.name}</p>
                <button onClick={setTicked(true)} className='tickButton'>Tick!</button>
            </div>);
    }

     }

ReactDOM.render(<Item />, document.getElementById("root"));
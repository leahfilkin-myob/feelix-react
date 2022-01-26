import React from "react";

export function Item(props) {

    return (
        <div role={"itemStyler"+props.index} className={props.isChecked? 'option ticked' : 'option'} >
            <p>{props.name}</p>
            <button disabled={props.isChecked} onClick={() => props.tickItemCallback(props.index)} className='tickButton'>Tick!</button>
        </div>
    );
}
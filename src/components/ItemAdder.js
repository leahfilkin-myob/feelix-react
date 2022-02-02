import React, {useState} from "react";
import {Box, Button, Columns, FormHorizontal, Input} from "@myob/myob-widgets";

export function ItemAdder({addItemCallback}) {

  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.length > 1) {
      addItemCallback({
        name: inputValue,
        checked: false
      });
    }
  }

  function handleEnter(e) {
    if (e.keyCode == 13) {
      handleAdd();
    }
  }

  return (
    <Columns alignY="bottom" marginBottom="md">
      <Columns.Column flex="1">
        <Input
          layout="inline-half"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
          type="text"
          name="addItem"
          label="What would you like to add?"
        />
      </Columns.Column>
      <Columns.Column>
        <Button marginBottom="tiny" type="secondary"
                onClick={() => handleAdd()} className="addButton"> Add me!</Button>
      </Columns.Column>
    </Columns>
  );
}
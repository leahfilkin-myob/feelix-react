import React from "react";
import {Input} from "@myob/myob-widgets";

export function Item(props) {

  return (
    <Input
      name={props.column.key}
      label={props.column.description}
      hideLabel
      value={props.value}
      onChange={props.onChange}
    />
  );
}
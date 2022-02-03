import {Select} from "@myob/myob-widgets";
import React from "react";

export function Aisles(props) {
  return (
    <Select
      hideLabel
      name={props.column.key}
      label={props.column.description}
      onChange={props.onChange}
      value={props.value}
    >
      <Select.Option value="placeholder" label="Please select an aisle" />
      <Select.Option value="opt1" label="Aisle 1" />
      <Select.Option value="opt2" label="Aisle 2" />
      <Select.Option value="opt3" label="Aisle 3" />
      <Select.Option value="opt4" label="Aisle 4" />
      <Select.Option value="opt5" label="Aisle 5" />
      <Select.Option value="opt6" label="Aisle 6" />
      <Select.Option value="opt7" label="Aisle 7" />
      <Select.Option value="opt8" label="Aisle 8" />
      <Select.Option value="opt9" label="Aisle 9" />
    </Select>
  );
}
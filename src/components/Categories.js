import {Select} from "@myob/myob-widgets";
import React from "react";

export function Categories(props) {
  return (
    <Select
      hideLabel
      name={props.column.key}
      label={props.column.description}
      onChange={props.onChange}
      value={props.value}
    >
      <Select.Option value="placeholder" label="Please select a category" />
      <Select.Option value="opt1" label="Produce" />
      <Select.Option value="opt2" label="Bakery" />
      <Select.Option value="opt3" label="Drinks" />
      <Select.Option value="opt4" label="Confectionery" />
      <Select.Option value="opt5" label="Deli" />
      <Select.Option value="opt6" label="Dairy" />
      <Select.Option value="opt7" label="Frozen" />
      <Select.Option value="opt8" label="Baking Goods" />
      <Select.Option value="opt9" label="Health and Beauty" />
    </Select>
  );
}
import {fireEvent, render} from "@testing-library/react";
import { screen } from '@testing-library/react'
import {Item} from "../components/Item";
import React from "react";


test("renders an item input correctly",
    () => {
        render(<Item
          column={{description: "Item name", key: "name"}}
          value="Milk"
          onChange={() => {}} />)
      expect(screen.getByDisplayValue('Milk')).toBeInTheDocument();
    });

/*test("item should call tickItem when button is clicked",
    () => {
        const tickItemCallBack = jest.fn();
        render(<Item
          column={{description: "Item name", key: "name"}}
          value="Milk"
          onChange={() => {}} />)

      fireEvent.click(
            screen.getByText("Tick!")
        );
        expect(tickItemCallBack).toHaveBeenCalledTimes(1);
    });

test("if item is checked, should be crossed out",
    () => {
        render(<Item key={0} name={"Test Item"} isChecked={true} index={0}/>);
        const outerDiv = screen.getByRole("ingredient0");
        expect(outerDiv).toHaveClass("ticked");
    });

test("if item is checked, button should be disabled",
    () => {
        render(<Item name={"Test Item"} isChecked={true} index={0}/>);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    });*/

import {ItemAdder} from "../components/ItemAdder";
import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";


test("renders a button to add with",
    () => {
        render(<ItemAdder/>);
        const button = screen.getByText(/Add me!/);
        expect(button).toHaveTextContent("Add me!");
    });

test("renders a label",
    () => {
       render(<ItemAdder/>);
       //why doesnt getByLabelText work?
        const label = screen.getByText("What would you like to add?");
        expect(label).toHaveTextContent("What would you like to add?");
    });

test("renders an input/textbox",
    () => {
        render(<ItemAdder/>);
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
    });

test("when add button is clicked, call the addItem function",
    () => {
    const addItemCallBack = jest.fn();
    render(<ItemAdder addItemCallback={addItemCallBack}/>);
    let input = screen.getByLabelText('What would you like to add?');
    fireEvent.change(input, {
        target: {
            value: 'Chocolate'
        }
    });
    fireEvent.click(
        screen.getByText(/Add me!/)
    );
    expect(addItemCallBack).toHaveBeenCalledTimes(1);

    })
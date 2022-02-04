import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import {ShoppingList} from "../components/ShoppingList";
import {Item} from "../components/Item";
import {ItemAdder} from "../components/ItemAdder";
import {Items} from "../components/Items";
import React from "react";

test("renders a heading",
    () => {
        render(<ShoppingList itemList={[
            {
                name: "Milk",
                checked: false,
            }
        ]}/>);
        const h1 = screen.getByText(/My Shopping List/);
        expect(h1).toHaveTextContent("My Shopping List");
    });

test("when given an item to add, should add an item to the list",
    () => {
        const itemList =[
            {
                name: "Milk",
                checked: false,
            },
        ];
        render(<ShoppingList itemList={itemList} />);
        let input = screen.getByLabelText('What would you like to add?');
        fireEvent.change(input, {
            target: {
                value: 'Chocolate'
            }
        });
        fireEvent.click(
            screen.getByText(/Add me!/)
        );

        expect(screen.getByText("Chocolate")).toBeInTheDocument()
    });

//move
test("when given an item to add, should not add item that is 0 chars long",
    () => {
        const addItemCallBack = jest.fn();
        render(<ItemAdder addItemCallback={addItemCallBack}/>);
        let input = screen.getByLabelText('What would you like to add?');
        fireEvent.change(input, {
            target: {
                value: ''
            }
        });
        fireEvent.click(
            screen.getByText(/Add me!/)
        );
        expect(addItemCallBack).toHaveBeenCalledTimes(0);

    });

test("if item clicked on, should get crosssed out",
    () => {
        const itemList =[
            {
                name: "Milk",
                checked: false,
            },
            {
                name: "Bread",
                checked: false,
            },
        ];
        let {shoppingList} = render(<ShoppingList itemList={itemList} />);
        const item0 = screen.getByRole("ingredient0");
        const item1 = screen.getByRole("ingredient1");
        const item0button = screen.getAllByText(/Tick!/)[0]

        fireEvent.click(
            item0button
        );

        render(shoppingList)

        expect(item0).toHaveClass("ticked");
        expect(item1).not.toHaveClass("ticked");
    });

//should make a test that if you delete the second row, the first and third are still there
test("item is removed when selected, others stay",
  () => {
    const itemList = [
      {
        name: "Milk",
        aisle: "opt1",
        category: "opt6",
      },
      {
        name: "Bread",
        aisle: "opt2",
        category: "opt2",
      },
      {
        name: "Eggs",
        aisle: "opt3",
        category: "opt8",
      },
    ];

    render(
      <ShoppingList
        itemList={itemList}
      />
    )
    const button = document.querySelector('div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > button')

    fireEvent.click(
      button
    );
    expect(screen.getByDisplayValue("Milk")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Eggs")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("Bread")).not.toBeInTheDocument();

  });
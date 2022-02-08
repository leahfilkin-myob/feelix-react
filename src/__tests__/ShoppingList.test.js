import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import {ShoppingList} from "../components/ShoppingList";
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

  const buttons = screen.getAllByRole('button')

    fireEvent.click(
      buttons[1]
    );
    expect(screen.getByDisplayValue("Milk")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Eggs")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("Bread")).not.toBeInTheDocument();

  });

test("adding an item makes a new row in the table",
  () => {
    const itemList = [
      {
        name: "Milk",
        aisle: "opt1",
        category: "opt6",
      },
    ];

    render(
      <ShoppingList itemList={itemList}
      />
    )
    const input = screen.getByDisplayValue("");

    fireEvent.change(
      input,
      {target: {value: 'Chocolate'}})

    expect(screen.getByDisplayValue("Milk")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Chocolate")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

test("changing items updates on screen",
  () => {
    const itemList = [
      {
        name: "Milk",
        aisle: "opt1",
        category: "opt6",
      },
    ];

    render(
      <ShoppingList
        itemList={itemList}
      />
    )

    const comboboxes = screen.getAllByRole('combobox')

    fireEvent.click(
      comboboxes[0], {target: {value: "opt7"}}
    )
    expect(comboboxes[0].value).toBe("opt7")

  });

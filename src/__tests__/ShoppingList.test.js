import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import {ShoppingList} from "../components/ShoppingList";
import React from "react";
import {Items} from "../components/Items";

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

/*
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

    const toChange = document.querySelector('div > div:nth-child(1) > div:nth-child(2) > div')
    const changeInput = toChange.getByRole('option', { name: /aisle 7/i })

    fireEvent.click(
      changeInput
    );
    expect(itemList[0].aisle).toBe("opt7")

  });*/

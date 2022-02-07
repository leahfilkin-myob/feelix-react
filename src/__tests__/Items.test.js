import {fireEvent, render, screen} from "@testing-library/react";
import {Items} from "../components/Items";
import React from "react";

test("has all items in shopping list",
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
        <Items
          tickItemCallback={() => {}}
          addItemCallback={() => {}}
          changeItemCallback={() => {}}
          items={itemList}
        />
    )
        expect(screen.getByDisplayValue("Milk")).toBeInTheDocument();
        expect(screen.getByDisplayValue("Bread")).toBeInTheDocument();
        expect(screen.getByDisplayValue("Eggs")).toBeInTheDocument();
    });


test("tick item call back occurs when row removed",
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

    const tickItemCallback = jest.fn()

    render(
      <Items
        tickItemCallback={tickItemCallback}
        addItemCallback={() => {}}
        changeItemCallback={() => {}}
        items={itemList}
      />
    )
    const button = document.querySelector('div > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > button')

    fireEvent.click(
        button
    );
   expect(tickItemCallback).toHaveBeenCalledTimes(1);

  });


test("clicking on selectors in row calls change row function",
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

    const changeItemCallback = jest.fn()

    render(
      <Items
        tickItemCallback={() => {}}
        addItemCallback={() => {}}
        changeItemCallback={changeItemCallback}
        items={itemList}
      />
    )
    const input = screen.getByDisplayValue('Milk');

    fireEvent.change(
      input,
      {target: {value: 'Low fat milk'}})

    expect(changeItemCallback).toHaveBeenCalledTimes(1);

  });

test("adding an item calls addRow function",
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

    const addItemCallback = jest.fn()

    render(
      <Items
        tickItemCallback={() => {}}
        addItemCallback={addItemCallback}
        changeItemCallback={() => {}}
        items={itemList}
      />
    )
    const input = screen.getByDisplayValue('');

    fireEvent.change(
      input,
      {target: {value: 'Chocolate'}})

    expect(addItemCallback).toHaveBeenCalledTimes(1);
  });
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

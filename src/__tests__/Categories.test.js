import {render, screen} from "@testing-library/react";
import React from "react";
import {Aisles} from "../components/Aisles";
import {Categories} from "../components/Categories";

test("has all aisles in the select box",
  () => {
    render(<Categories
      column={{description: "Category", key: "category"}}
      value={"category"}
      onChange={() => {
      }}
    />)

      expect(screen.getByText("Produce")).toBeInTheDocument();
      expect(screen.getByText("Bakery")).toBeInTheDocument();
      expect(screen.getByText("Drinks")).toBeInTheDocument();
      expect(screen.getByText("Confectionery")).toBeInTheDocument();
      expect(screen.getByText("Deli")).toBeInTheDocument();
      expect(screen.getByText("Dairy")).toBeInTheDocument();
      expect(screen.getByText("Frozen")).toBeInTheDocument();
      expect(screen.getByText("Baking Goods")).toBeInTheDocument();
      expect(screen.getByText("Health and Beauty")).toBeInTheDocument();

  });

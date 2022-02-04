import {render, screen} from "@testing-library/react";
import React from "react";
import {Aisles} from "../components/Aisles";

test("has all aisles in the select box",
  () => {
    render(<Aisles
      column={{description: "Aisle", key: "aisle"}}
      value={"aisle"}
      onChange={() => {
      }}
    />)
      expect(screen.getByText("Aisle 1")).toBeInTheDocument();
      expect(screen.getByText("Aisle 2")).toBeInTheDocument();
      expect(screen.getByText("Aisle 3")).toBeInTheDocument();
      expect(screen.getByText("Aisle 4")).toBeInTheDocument();
      expect(screen.getByText("Aisle 5")).toBeInTheDocument();
      expect(screen.getByText("Aisle 6")).toBeInTheDocument();
      expect(screen.getByText("Aisle 7")).toBeInTheDocument();
      expect(screen.getByText("Aisle 8")).toBeInTheDocument();
      expect(screen.getByText("Aisle 9")).toBeInTheDocument();
  });

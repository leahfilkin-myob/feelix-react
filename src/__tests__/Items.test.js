import {render, screen} from "@testing-library/react";
import {Items} from "../components/Items";

test("has all items in shopping list",
    () => {
        render(<Items items={[
            {
                name: "Milk",
                checked: false,
            },
            {
                name: "Bread",
                checked: false,
            },
            {
                name: "Eggs",
                checked: false,
            },
        ]}/>);
        expect(screen.getByText("Milk")).toBeInTheDocument();
        expect(screen.getByText("Bread")).toBeInTheDocument();
        expect(screen.getByText("Eggs")).toBeInTheDocument();
    });
import {render, screen} from "@testing-library/react";
import {ShoppingList} from "../components/ShoppingList";

test("has all items in shopping list",
    () => {
        const {shoppingList} = render(<ShoppingList items={[
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
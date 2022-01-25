import {render} from "@testing-library/react";
import App from "../App";
import {screen} from "@testing-library/react";

test("renders a heading",
    () => {
        render(<App/>);
        const h1 = screen.getByText(/My Shopping List/);
        expect(h1).toHaveTextContent("My Shopping List");
    });

test("when given an item to add, should add an item to the list",
    () => {
        render(<App/>);
        const items = [
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
        ];
        var
        expect(h1).toHaveTextContent("My Shopping List");
    });
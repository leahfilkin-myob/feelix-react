import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import {ShoppingList} from "../components/ShoppingList";

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
        let {shoppingList} = render(<ShoppingList itemList={itemList} />);
        //item to add
        let input = screen.getByLabelText('What would you like to add?');
        fireEvent.change(input, {
            target: {
                value: 'Chocolate'
            }
        });
        fireEvent.click(
            screen.getByText(/Add me!/)
        );

        render(shoppingList)

        //rerender to see change
        //check its been added
        expect(screen.getByText("Chocolate")).toBeInTheDocument()
    });
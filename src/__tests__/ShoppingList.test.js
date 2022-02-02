import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import {ShoppingList} from "../components/ShoppingList";
import {Item} from "../components/Item";
import {ItemAdder} from "../components/ItemAdder";

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
        render(<ShoppingList itemList={itemList} />);
        let input = screen.getByLabelText('What would you like to add?');
        fireEvent.change(input, {
            target: {
                value: 'Chocolate'
            }
        });
        fireEvent.click(
            screen.getByText(/Add me!/)
        );

        expect(screen.getByText("Chocolate")).toBeInTheDocument()
    });

//move
test("when given an item to add, should not add item that is 0 chars long",
    () => {
        const addItemCallBack = jest.fn();
        render(<ItemAdder addItemCallback={addItemCallBack}/>);
        let input = screen.getByLabelText('What would you like to add?');
        fireEvent.change(input, {
            target: {
                value: ''
            }
        });
        fireEvent.click(
            screen.getByText(/Add me!/)
        );
        expect(addItemCallBack).toHaveBeenCalledTimes(0);

    });

test("if item clicked on, should get crosssed out",
    () => {
        const itemList =[
            {
                name: "Milk",
                checked: false,
            },
            {
                name: "Bread",
                checked: false,
            },
        ];
        let {shoppingList} = render(<ShoppingList itemList={itemList} />);
        const item0 = screen.getByRole("ingredient0");
        const item1 = screen.getByRole("ingredient1");
        const item0button = screen.getAllByText(/Tick!/)[0]

        fireEvent.click(
            item0button
        );

        render(shoppingList)

        expect(item0).toHaveClass("ticked");
        expect(item1).not.toHaveClass("ticked");
    });
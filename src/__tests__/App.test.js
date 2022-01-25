import {render} from "@testing-library/react";
import {ItemAdder} from "../components/ItemAdder";
import App from "../App";

test("renders a heading",
    () => {
        //query
        const {getByText} = render(<App/>);
        const h1 = getByText(/My Shopping List/);
        expect(h1).toHaveTextContent("My Shopping List");
    });
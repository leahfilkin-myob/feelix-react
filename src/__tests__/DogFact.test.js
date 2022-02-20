import React from "react";
import {DogFact} from "../components/DogFact";
import {makeRequest} from "../components/DogFactUtil";
import * as utils from "../components/DogFactUtil"

import {render, screen} from "@testing-library/react";

test("if error with fetching dog fact, return error message",
  async () => {
    render(
      <DogFact url={'WRONG/api/v1/resources/dogs?number=1'}/>
    );
    expect(await screen.findByText("Oops! Something went wrong. We are unable to get a dog fact for you at this time.")).toBeInTheDocument()
  }
)

test("Displays dog fact if valid dog fact is returned",
  async () => {
    const spy = jest.spyOn(utils, 'makeRequest').mockReturnValueOnce([{fact: "mocked dog fact"}]);

    render(
      <DogFact url={'/api/v1/resources/dogs?index=1'}/>
    );
    expect(await screen.findByText("mocked dog fact")).toBeInTheDocument();

    spy.mockReset();
    spy.mockRestore();
  }
)

// mock {fact:
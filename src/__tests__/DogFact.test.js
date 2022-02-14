import React from "react";
import {DogFact} from "../components/DogFact";
import {render, screen} from "@testing-library/react";

test("if error with fetching dog fact, return error message",
  async () => {
    render(
      <DogFact url={'WRONG/api/v1/resources/dogs?number=1'}/>
    );
    expect(await screen.findByText("Oops! Something went wrong. We are unable to get a dog fact for you at this time.")).toBeInTheDocument()
  }
)

/*
test("if all goes well, dog fact should be one of the ones supplied",
  async () => {
    render(
      <DogFact url={'/api/v1/resources/dogs?number=1'}/>
    );

    let result;
    const fetchPromise = fetch('/api/v1/resources/dogs/all');
    fetchPromise.then(response => {
      return response.json()
    })
      .then(factArray => {
        result = factArray.map(factData => factData.fact);
      })

      const match = result.find( element => {
    if (element.includes(screen.getByRole("dogFactDisplay").innerText)) {
      return true;
    }})

    expect(match).toBeTruthy()
  }
)*/

test("mock api",
  async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({fact: "a random dog fact"}),
      }));

    render(<DogFact url={'/api/v1/resources/dogs?number=1'}/>)



    expect(await screen.findByText("a random dog fact")).toBeInTheDocument()

/*    const fact = {fact: "a random dog fact"}

    const mockGetDogFact = jest.spyOn(global, fetch);
    mockGetDogFact.mockResolvedValue(fact);

    await mockGetDogFact();

    expect(await mockGetDogFact()).toHaveValue("a random dog fact")

    afterEach(() => {
      mockGetDogFact.mockClear()
    })*/

  }
)
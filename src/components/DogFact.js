import React, {useEffect, useState} from "react";
import {Card} from "@myob/myob-widgets";


export function DogFact(props) {

  const [dogFact, setDogFact] =
    useState("Dog fact incoming...");

  async function makeRequest() {
    const json = await fetch(props.url)
      .then(async promise => promise.json())
      .then(async promiseJson => {
        return await promiseJson.map(factData => factData.fact)
      })
      .catch( error => {
      return "Oops! Something went wrong. We are unable to get a dog fact for you at this time." });;
      return json;
  }

  useEffect(  () => {
    async function displayDogFact() {
      let fact =  await makeRequest();
      setDogFact(fact);
    }
    displayDogFact();
  }, []);

  return (
    <Card>
      <h2> Your dog fact for this shopping trip!</h2>
      <p role="dogFactDisplay" id="dogFact"> {dogFact} </p>
    </Card>
  )
}
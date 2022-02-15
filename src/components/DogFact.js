import React, {useEffect, useState} from "react";
import {Card} from "@myob/myob-widgets";
import makeRequest from "./DogFactUtil";


export function DogFact(props) {

  const [dogFact, setDogFact] =
    useState("Dog fact incoming...");

   async function getDogFactFromJson(json) {
    return await json.map(factData => factData.fact)
  }

  async function displayDogFact() {
    let json =  await makeRequest(props.url);
    if (json == "ERROR") {
      setDogFact("Oops! Something went wrong. We are unable to get a dog fact for you at this time.")
    }
    else {
      let fact = await getDogFactFromJson(json)
      setDogFact(fact);
    }
  }

  useEffect(  () => {
    displayDogFact();
  }, []);

  return (
    <Card>
      <h2> Your dog fact for this shopping trip!</h2>
      <p role="dogFactDisplay" id="dogFact"> {dogFact} </p>
    </Card>
  )
}
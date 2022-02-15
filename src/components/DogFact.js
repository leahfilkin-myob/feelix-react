import React, {useEffect} from "react";
import {Card} from "@myob/myob-widgets";


export function DogFact(props) {

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

  function insertTextFromRequest(fact) {
    const paragraph = document.getElementById("dogFact");
    paragraph.innerHTML = fact;
  }

  useEffect(  () => {
    async function displayDogFact() {
      let fact =  await makeRequest();
      insertTextFromRequest(fact);
    }
    displayDogFact();
  }, []);

  return (
    <Card>
      <h2> Your dog fact for this shopping trip!</h2>
      <p role="dogFactDisplay" id="dogFact"> Dog fact incoming...</p>
    </Card>
  )
}
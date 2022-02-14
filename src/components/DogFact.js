import React from "react";
import {Card} from "@myob/myob-widgets";


export function DogFact(props) {

  async function makeRequest() {
    const fetchPromise = await fetch('/api/v1/resources/dogs?number=1');
    const json =  await fetchPromise.json();
    let fact =  await json.map(factData => factData.fact);
    return fact;
  }

  function insertTextFromRequest(fact) {
    const paragraph = document.getElementById("dogFact");
    paragraph.innerHTML = fact;
  }

  window.onload =  async function displayDogFact() {
    let fact =  await makeRequest();
    insertTextFromRequest(fact)
  }

  return (
    <Card>
      <h2> Your dog fact for this shopping trip!</h2>
      <p role="dogFactDisplay" id="dogFact"> Dog fact incoming...</p>
    </Card>
  )
}
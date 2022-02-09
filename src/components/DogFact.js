import React from "react";
import {Card} from "@myob/myob-widgets";


export function DogFact(props) {

  window.onload = function getDogFact() {
    const fetchPromise = fetch('/api/v1/resources/dogs?number=1');
    const paragraph = document.getElementById("test");
    fetchPromise.then(response => {
      return response.json()
    })
      .then(factArray => {
        let result = factArray.map(factData => factData.fact);
        paragraph.innerHTML = result;
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Card>
      <h2> Your dog fact for this shopping trip!</h2>
      <p id="test"> Dog fact incoming...</p>
    </Card>
  )
}
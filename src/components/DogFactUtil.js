import React, {useState} from "react";


function makeRequest(url) {
  const json = fetch(url)
    .then(promise => promise.json())
    /*.then(async promiseJson => {
      return await promiseJson.map(factData => factData.fact)
    })
    .catch(error => {
      return "Oops! Something went wrong. We are unable to get a dog fact for you at this time."
    });*/
  ;

  return json;
}

export default makeRequest;
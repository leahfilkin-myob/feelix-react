import React, {useState} from "react";


function makeRequest(url) {
  const json = fetch(url)
    .then(promise => promise.json())
    .catch(error => {
      return "ERROR"
    })
  ;
  return json;
}

export default makeRequest;
import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.date[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/hello${keyword}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

return (
  <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} />
    </form>
  </div>
);

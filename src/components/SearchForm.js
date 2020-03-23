import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState('');

  const changeHandler = event => {
    setInput(event.target.value);

  };

  return (
    <section className="search-form">
     <form>
        <input
         type='text'
         id='searchInput'
         name='search'
         maxLength='30'
         placeholder='Search Characters'
         onChange={changeHandler}
        />
     </form>
    </section>
  );
}

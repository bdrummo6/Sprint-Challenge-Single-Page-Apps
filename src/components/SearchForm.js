import React, { useState } from 'react';

import styled from 'styled-components';

export default function SearchForm(props) {

   const Button = styled.button`
     margin-left: 5px;
   `;

   const [searchResults, setSearchResults] = useState([]);

   const changeHandler = event => {
      setSearchResults(event.target.value);
   };

   const submitHandler = event => {
      event.preventDefault();

      const query = props.characters.filter(character => {
         return character.name.toLowerCase().indexOf(searchResults.toLowerCase()) !== -1;
      });

      props.search(query);
   };

  return (
     <section className="search-form">
        <form onSubmit={submitHandler}>
           <input
              type='text'
              id='searchInput'
              name='search'
              maxLength='30'
              onChange={changeHandler}
           />
           <Button type='submit'>Search</Button>
        </form>
    </section>
  );
}

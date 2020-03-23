import React, { useEffect, useState } from "react";
import axios from 'axios';

import styled from 'styled-components';
import SearchForm from "./SearchForm";

export default function CharacterList(props) {

   const Characters = styled.div`
     width: 60%;
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     align-items: center;
     margin: 10px 20% 10px 20%;
     
   `;

   const Character = styled.div`
     width: 50%;
     display: flex;
     flex-direction: column;
     align-items: center;
     margin: 5px 25% 5px 25%;
     background: cadetblue;
     color: white;
     border: 2px solid cadetblue;
     border-radius: 2%;
     
   `;

   const Atts = styled.span`
     font-weight: bold;
   `;

   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
         .then(response => {
            // console.log(response.data);
            setCharacters(response.data.results);
         })
         .catch(error => {
            console.log(error);
         })
   }, []);

   return (
      <section className="character-list">
         <Characters>
            <h2>List of Characters</h2>
            <SearchForm {...props} characters={characters} setCharacter={setCharacters} />
            {characters.map(character => {
               return (
                  <Character key={character.id}>
                     <h3>{character.name}</h3>
                     <p>Status: <Atts>{character.status}</Atts></p>
                     <p>Gender: <Atts>{character.gender}</Atts></p>
                     <p>Species: <Atts>{character.species}</Atts></p>
                  </Character>
               )
            })}
         </Characters>
      </section>
   );
}


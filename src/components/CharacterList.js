import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList(props) {
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
         <div className='characters'>
            <h2>List of Characters</h2>
            {characters.map(character => {
               return (
                  <div className='character' key={character.id}>
                     <h3>{character.name}</h3>
                     <div>
                        <p>Status: {character.status}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Species: {character.species}</p>
                     </div>
                  </div>
               )
            })}
         </div>
      </section>
   );
}


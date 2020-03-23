import React from "react";

import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Header() {
  const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    margin: 10px 32% 10px 32%;
  `;

   return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Buttons>
         <button><Link to='/'>Home</Link></button>
         <button><Link to='/characters'>Characters</Link></button>
      </Buttons>
    </header>
  );
}

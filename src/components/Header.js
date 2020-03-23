import React from "react";

import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Header() {
  const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    margin: 10px 35% 10px 35%;
  `;

   const Btn = styled.button`
    font-size: 1.1rem;
    background: white;
    text-decoration: none;
  `;

   return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Buttons>
         <Btn><Link to='/'>Home</Link></Btn>
         <Btn><Link to='/characters'>Characters</Link></Btn>
      </Buttons>
    </header>
  );
}

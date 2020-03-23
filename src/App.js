import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

import styled from "styled-components";

export default function App() {
   const App = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
   `;


  return (
    <App>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </App>
  );
}

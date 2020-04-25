import React from 'react';
import { gql } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import GlobalStyles from '../Styles/GlobalStyles';
import Router from './Router';
import Theme from '../Styles/Theme';
import { useQuery } from 'react-apollo-hooks';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  
  const { 
    data : { isLoggedIn} 
  } = useQuery(QUERY);  

  return (
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router isLoggedIn={isLoggedIn} />
    </>
  </ThemeProvider>
  )
};
 
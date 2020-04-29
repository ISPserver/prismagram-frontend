import React from 'react';
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from '../Styles/GlobalStyles';
import Router from './Router';
import Theme from '../Styles/Theme';
import { useQuery } from 'react-apollo-hooks';
import Footer from './Footer';

const QUERY = gql`
  {
    isLoggedIn @client    
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;
/*상단에 @client 쓴 이유
GraphQL 백엔드 서버에서 가져올 데이터가 아니라는 것을 @client라고 써서 알려주는 것.
대신 이 앱을 사용하는 사용자의 로컬 캐시(cache)에서 참조.
cache.writeData({ data... })으로 생성한 것.
because 서버에 계속 참조 요청을 보내면 돈을 더 내야하기 때문에
한번만 사용자의 로컬 캐시에 저장해두고 그 isLoggedIn 데이터는 
로컬에서만 참조하니까 서버에는 부하가 전혀 없게되는것 */
export default () => {
  
  const { 
    data : { isLoggedIn} 
  } = useQuery(QUERY);  

  return (
    <ThemeProvider theme={Theme}>
    <Wrapper>
      <GlobalStyles />
      <Router isLoggedIn={isLoggedIn} />
      <Footer />
    </Wrapper>
  </ThemeProvider>
  )
};
 
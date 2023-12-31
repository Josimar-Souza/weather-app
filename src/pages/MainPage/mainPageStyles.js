import styled from 'styled-components';

export const MainPageContainer = styled.main`
  align-items: center;
  background-color: #62ACF5;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  @media only screen and (max-width: 512px) {
    flex-direction: column;
    padding: 10px;
  };
`;

export default MainPageContainer;

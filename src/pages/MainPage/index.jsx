import React from 'react';

import { MainPageContainer } from './mainPageStyles';
import Search from '../../components/Search';
import Weather from '../../components/Weather';

function MainPage() {
  return (
    <MainPageContainer>
      <Search />
      <Weather />
    </MainPageContainer>
  );
}

export default MainPage;

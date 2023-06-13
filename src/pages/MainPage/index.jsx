import React from 'react';
import { Divider } from 'antd';
import {
  MainPageContainer,
  SearchContainer,
  SearchTitle,
  CustomInput,
  CustomDividerContainer,
  CustomDividerLine,
  CustomDividerInfo,
  CustomButton,
} from './mainPageStyles';

function MainPage() {
  return (
    <MainPageContainer>
      <SearchContainer>
        <SearchTitle>Weather App</SearchTitle>
        <Divider />
        <CustomInput placeholder="Enter a city name" />
        <CustomDividerContainer>
          <CustomDividerLine />
          <CustomDividerInfo>or</CustomDividerInfo>
          <CustomDividerLine />
        </CustomDividerContainer>
        <CustomButton>Get device location</CustomButton>
      </SearchContainer>
    </MainPageContainer>
  );
}

export default MainPage;

import React from 'react';
import { Divider } from 'antd';

import {
  SearchContainer,
  SearchTitle,
  CustomInput,
  CustomDividerContainer,
  CustomDividerLine,
  CustomDividerInfo,
  CustomButton,
} from './searchStyles';

function Search() {
  const getCurrentWeather = async ({ target: { value } }) => {
    console.log(value);
  };

  return (
    <SearchContainer>
      <SearchTitle>Weather App</SearchTitle>
      <Divider />
      <CustomInput placeholder="Enter a city name" onChange={getCurrentWeather} />
      <CustomDividerContainer>
        <CustomDividerLine />
        <CustomDividerInfo>or</CustomDividerInfo>
        <CustomDividerLine />
      </CustomDividerContainer>
      <CustomButton>Get device location</CustomButton>
    </SearchContainer>
  );
}

export default Search;

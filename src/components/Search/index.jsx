import React, { useContext, useState } from 'react';
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
import { weatherContext } from '../../context/weatherContext';
import sendNotification from '../../helpers/sendNotification';

function Search() {
  const { getCurrentWeather } = useContext(weatherContext);
  const [searchLoading, setSearchLoading] = useState(false);
  const [getLocationLoading, setGetLocationLoading] = useState(false);
  const [term, setTerm] = useState('');

  const onInputChange = async ({ target: { value } }) => {
    setTerm(value);
  };

  const onSearchClick = async () => {
    setSearchLoading(true);

    await getCurrentWeather(term);

    setSearchLoading(false);
  };

  const searchLocation = async (position) => {
    const { coords } = position;

    const formattedTerm = `${coords.latitude},${coords.longitude}`;

    setGetLocationLoading(true);

    await getCurrentWeather(formattedTerm);

    setGetLocationLoading(false);
  };

  const onGetDeviceLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(searchLocation);
    } else {
      sendNotification('This browser doesn\'t support geolocation', 'warning');
    }
  };

  return (
    <SearchContainer>
      <SearchTitle>Weather App</SearchTitle>
      <Divider />
      <CustomInput placeholder="Enter a city name" onChange={onInputChange} />
      <CustomButton
        loading={searchLoading}
        onClick={onSearchClick}
        margin="20px 0 0 0"
        width="50%"
      >
        Search
      </CustomButton>
      <CustomDividerContainer>
        <CustomDividerLine />
        <CustomDividerInfo>or</CustomDividerInfo>
        <CustomDividerLine />
      </CustomDividerContainer>
      <CustomButton
        onClick={onGetDeviceLocationClick}
        margin="0"
        width="80%"
        loading={getLocationLoading}
      >
        Get device location
      </CustomButton>
    </SearchContainer>
  );
}

export default Search;

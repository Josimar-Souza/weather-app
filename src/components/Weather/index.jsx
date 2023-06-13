import React, { useContext } from 'react';
import { Divider } from 'antd';

import {
  WeatherContainer,
  WeatherTitle,
  WeatherMainInfo,
  WeatherIconContainer,
  WeatherIcon,
  TemperatureInfo,
  WeatherInfo,
  CustomEnvironmentIcon,
  MainWeatherInfoContainer,
  SecondaryContainer,
  SecondaryLeftContainer,
  SecondaryRightContainer,
  SecondaryInfoContainer,
  WeatherSecondaryInfo,
  SecondaryIconContainer,
  SecondaryIcon,
} from './weatherStyles';
import { weatherContext } from '../../context/weatherContext';

import thermometerIcon from '../../assets/icons/thermometer.svg';
import dropletIcon from '../../assets/icons/droplet.svg';

function Weather() {
  const { currentWeather } = useContext(weatherContext);
  const { current, location } = currentWeather;

  return (
    <WeatherContainer>
      <WeatherTitle>Weather App</WeatherTitle>
      <Divider />
      <WeatherMainInfo>
        <WeatherIconContainer>
          <WeatherIcon src={`https:${current?.condition.icon}`} />
        </WeatherIconContainer>
        <TemperatureInfo>{`${current?.temp_c}º C`}</TemperatureInfo>
        <MainWeatherInfoContainer>
          <WeatherInfo>{current?.condition.text}</WeatherInfo>
          <WeatherInfo>
            <CustomEnvironmentIcon />
            {`${location?.name}, ${location?.country}`}
          </WeatherInfo>
        </MainWeatherInfoContainer>
      </WeatherMainInfo>
      <SecondaryContainer>
        <SecondaryLeftContainer>
          <SecondaryIconContainer>
            <SecondaryIcon src={thermometerIcon} />
          </SecondaryIconContainer>
          <SecondaryInfoContainer>
            <WeatherSecondaryInfo>
              {current?.feelslike_c}
              º C
            </WeatherSecondaryInfo>
            <WeatherSecondaryInfo>Feels like</WeatherSecondaryInfo>
          </SecondaryInfoContainer>
        </SecondaryLeftContainer>
        <SecondaryRightContainer>
          <SecondaryIconContainer>
            <SecondaryIcon src={dropletIcon} />
          </SecondaryIconContainer>
          <SecondaryInfoContainer>
            <WeatherSecondaryInfo>
              {current?.humidity}
              %
            </WeatherSecondaryInfo>
            <WeatherSecondaryInfo>Humidity</WeatherSecondaryInfo>
          </SecondaryInfoContainer>
        </SecondaryRightContainer>
      </SecondaryContainer>
    </WeatherContainer>
  );
}

export default Weather;

import styled from 'styled-components';
import { EnvironmentOutlined } from '@ant-design/icons';

export const WeatherContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  min-height: 550px;
  padding: 5px;
  width: 20%;

  @media only screen and (max-width: 512px) {
    margin: 0;
    margin-top: 20px;
    width: 90%;
  }
`;

export const WeatherTitle = styled.h1`
  color: #62acf5;
`;

export const WeatherMainInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
  width: 100%;
`;

export const WeatherIconContainer = styled.div`
  width: 30%;
`;

export const WeatherIcon = styled.img`
  width: 100%;
`;

export const TemperatureInfo = styled.h1`
  font-size: 66px;
`;

export const MainWeatherInfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WeatherInfo = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 5px 0;
  text-align: center;
`;

export const CustomEnvironmentIcon = styled(EnvironmentOutlined)`
  margin-right: 12px;
`;

export const SecondaryContainer = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100px;
  margin-top: 10px;
  width: 100%;
`;

export const SecondaryLeftContainer = styled.div`
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 50%;
`;

export const SecondaryRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 50%;
`;

export const SecondaryInfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

export const WeatherSecondaryInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 5px 0;
`;

export const SecondaryIconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const SecondaryIcon = styled.img`
  width: 50%;
`;

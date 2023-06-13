import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import WeatherAPI from '../../domain/weather';
import ErrorCreator from '../../helpers/errorCreator';
import sendNotification from '../../helpers/sendNotification';

export const weatherContext = createContext();
const weatherAPI = new WeatherAPI(15000);

function WeatherContext({ children }) {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    const getInitialWeather = async () => {
      const weather = await weatherAPI.getCurrentWeather();

      if (weather instanceof ErrorCreator) {
        sendNotification(weather.customMessage, 'error');
      } else {
        setCurrentWeather(weather);
      }
    };

    getInitialWeather();
  }, []);

  const getCurrentWeather = async (term) => {
    const weather = await weatherAPI.getCurrentWeather(term);

    if (weather instanceof ErrorCreator) {
      sendNotification(weather.customMessage, 'error');
    } else {
      setCurrentWeather(weather);
    }
  };

  const contextValue = useMemo(() => ({
    currentWeather,
    getCurrentWeather,
  }));

  return (
    <weatherContext.Provider value={contextValue}>
      {children}
    </weatherContext.Provider>
  );
}

WeatherContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WeatherContext;

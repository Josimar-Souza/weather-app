import React from 'react';
import MainPage from './pages/MainPage';
import WeatherContext from './context/weatherContext';

function App() {
  return (
    <WeatherContext>
      <MainPage />
    </WeatherContext>
  );
}

export default App;

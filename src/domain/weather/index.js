import axios from 'axios';
import ErrorCreator from '../../helpers/errorCreator';

const baseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

class WeatherAPI {
  constructor(timeout) {
    this.api = axios.create({
      timeout,
    });
  }

  async getCurrentWeatherByCity(city = 'Paris') {
    try {
      const { data } = await this.api.get(`${baseUrl}/current.json?key=${apiKey}&q=${city}`);

      return data;
    } catch (e) {
      return new ErrorCreator(e, `Não foi possível encontrar as informações do tempo para ${city}`);
    }
  }
}

export default WeatherAPI;

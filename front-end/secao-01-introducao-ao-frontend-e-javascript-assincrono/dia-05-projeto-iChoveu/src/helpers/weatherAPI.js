const TOKEN = import.meta.env.VITE_TOKEN;
const BASE_URL = 'http://api.weatherapi.com/v1';

export const searchCities = async (term) => {
  try {
    const result = await fetch(`${BASE_URL}/search.json?lang=pt&key=${TOKEN}&q=${term}`);
    const data = await result.json();
    if (data.length === 0) {
      alert('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const getWeatherByCity = async (cityURL) => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await result.json();
  const obj = {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };
  return obj;
};

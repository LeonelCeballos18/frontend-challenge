import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from './services/weatherService';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      try {
        const data = await getWeatherByCity('Colima');
        setWeather(data);
      } catch (err) {
        console.error('Error in obtaining Colimas climate:', err);
        setError('Initial weather could not be obtained.');
      }
    };
    fetchDefaultWeather();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-soft-gradient">
      <div className="text-center">
        <h1 className="text-4xl font-light">Clima</h1>
        <div className="w-20 mx-auto border-t border-black my-8"></div>
        {weather && (
          <div className="text-center">
            <h2 className="text-xl font-light mt-4">
              {weather.name}, {weather.sys.country}
            </h2>
            <h1 className="text-9xl font-light mt-4">{Math.round(weather.main.temp)}°C</h1>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="mx-auto mt-4"
            />
            <h2 className="text-xl font-light mt-4">{weather.weather[0].description}</h2>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <form onSubmit={handleSubmit} className="pt-8 text-center">
          <div className="relative mb-6">
            <label
              htmlFor="city"
              className="absolute -top-4 left-0 text-gray-800 text-sm"
            >
              Ingresa la ciudad
            </label>
            <input
              type="text"
              id="city"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg bg-transparent py-1 placeholder-gray-400"
              placeholder="Ingresa la ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

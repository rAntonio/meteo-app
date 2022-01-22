import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

test('renders learn react link', () => {
  render(<WeatherCard 
    name =  'Antananarivo'
    date =  {new Date()}
    tempFahrenheit = {67.96}
    tempMin = {67.96}
    tempMax = {67.96}
    humidity = {0}
    wind={0}
  />);
  const linkElement = screen.getByText(/Antananarivo/i);
  const celciusElement = screen.getByText(/20° C/i)
  expect(linkElement).toBeInTheDocument();
  expect(celciusElement).toBeInTheDocument();
});

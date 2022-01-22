import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

test('renders learn react link', () => {
  render(<WeatherCard 
    name =  'Antananarivo'
    date =  {new Date()}
    tempFahrenheit = {67.96}
  />);
  const linkElement = screen.getByText(/Antananarivo/i);
  const celciusElement = screen.getByText(/20° C/i)
  expect(linkElement).toBeInTheDocument();
  expect(celciusElement).toBeInTheDocument();
});

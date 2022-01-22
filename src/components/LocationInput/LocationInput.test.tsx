import React from 'react';
import { render, screen } from '@testing-library/react';
import LocationInput from './LocationInput';

test('renders learn react link', () => {
  render(
    <LocationInput 
      placeholder='Rechercher...'
      onSubmit={(input)=> {console.log("input" , input)}}
    />
  );
  const linkElement = screen.getByText(/Rechercher.../i);
  expect(linkElement).toBeInTheDocument();
});

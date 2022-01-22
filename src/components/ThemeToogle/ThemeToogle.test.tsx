import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeToogle from './ThemeToogle';

test('renders learn react link', () => {
  render(
    <ThemeToogle 
      toogleAction={()=>{}}
      label='testLabel'
    />
  );
  const label = screen.getByText(/testLabel/i);
  expect(label).toBeInTheDocument();
});

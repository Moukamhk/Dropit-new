import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Login from '../src/components/Login/Login'; // Your component path
import '@testing-library/jest-dom'; // Importing jest-dom matchers

test('Login form renders correctly', () => {
  render(
    <BrowserRouter>  {/* Wrap in BrowserRouter */}
      <Login />
    </BrowserRouter>
  );

  // Example assertion: Check if the login button is rendered
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  
});

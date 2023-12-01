import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Sidebar from './components/ui/Sidebar';

test('redirects on "Empresas" link click', () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  const empresasLink = screen.getByText(/Empresas/i);
  expect(empresasLink).toBeInTheDocument();

  fireEvent.click(empresasLink);

  // Verifica que la URL ha cambiado a '/admin/company'
  expect(window.location.pathname).toBe('/admin/company');
});


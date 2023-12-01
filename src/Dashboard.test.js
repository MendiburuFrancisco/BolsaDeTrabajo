import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardHome from './components/ui/dashboard/dashboardHome';

test('renders DashboardHome component', () => {
  render(<DashboardHome />);

  // Verificar que los elementos del primer bloque están presentes
  expect(screen.getByText('Usuarios')).toBeInTheDocument();
  expect(screen.getByText(/Ver usuarios registrados/i)).toBeInTheDocument();
  expect(screen.getByText('Ver usuarios')).toBeInTheDocument();

  // Verificar que los elementos del segundo bloque están presentes
  expect(screen.getByText('Empresas')).toBeInTheDocument();
  expect(screen.getByText(/Ver empresas registradas/i)).toBeInTheDocument();
  expect(screen.getByText('Ver empresas')).toBeInTheDocument();

  // Verificar que los elementos del tercer bloque están presentes
  expect(screen.getByText('Trabajos')).toBeInTheDocument();
  expect(screen.getByText(/Ver trabajos registrados/i)).toBeInTheDocument();
  expect(screen.getByText('Ver trabajos')).toBeInTheDocument();
});

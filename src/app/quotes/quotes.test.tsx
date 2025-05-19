import { describe, expect, test, vi } from 'vitest';

import { renderWithProviders } from '@/hoc/render-with-providers';
import { screen } from '@testing-library/react';

import QuotesPage from './page';

const mockOnCancel = vi.fn();
const mockUpdateData = vi.fn();
const mockUpdatePage = vi.fn();

describe('Quote Form', () => {
  test('En el encabezado de la página se muestra el título', () => {
    renderWithProviders(<QuotesPage />);
    const title = screen.getAllByText(/Grilla de Frases/i);
    expect(title).toBeDefined();
  });
  test('En el encabezado de la página se muestra la descripción', () => {
    renderWithProviders(<QuotesPage />);
    const description = screen.getAllByText(
      'Crea, Busca/Filtra y Elimina Frases',
    );
    expect(description).toBeDefined();
  });
  test('En la vista se muestra  un input para buscar frases', () => {
    renderWithProviders(<QuotesPage />);
    const searchInput = screen.getByPlaceholderText('Buscar Frases');
    expect(searchInput).toBeInTheDocument();
  });
  test('En la vista se muestra un botón para crear una nueva frase', () => {
    renderWithProviders(<QuotesPage />);
    const createQuoteButton = screen.getByRole('button', {
      name: 'Nueva Frase',
    });
    expect(createQuoteButton).toBeInTheDocument();
  });
  test('En la vista se muestra la info de que la misma esta vacía', () => {
    renderWithProviders(<QuotesPage />);
    const emptyQuotesInfo = screen.getByText('No hay datos disponibles');
    expect(emptyQuotesInfo).toBeInTheDocument();
  });
});

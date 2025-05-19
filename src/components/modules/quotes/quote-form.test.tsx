import { describe, expect, test, vi } from 'vitest';

import { renderWithProviders } from '@/hoc/render-with-providers';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import QuoteForm from './quote-form';

const mockOnCancel = vi.fn();
const mockUpdateData = vi.fn();
const mockUpdatePage = vi.fn();

describe('Quote Form', () => {
  test('se renderiza el textarea para la frase', () => {
    renderWithProviders(
      <QuoteForm
        onCancel={mockOnCancel}
        updateData={mockUpdateData}
        updatePage={mockUpdatePage}
      />,
    );
    const input = screen.getByPlaceholderText(/Frase/i);
    expect(input).toBeInTheDocument();
  });
  test('se renderiza el input para el autor', () => {
    renderWithProviders(
      <QuoteForm
        onCancel={mockOnCancel}
        updateData={mockUpdateData}
        updatePage={mockUpdatePage}
      />,
    );
    const input = screen.getByPlaceholderText(/Autor/i);
    expect(input).toBeInTheDocument();
  });
  test('se renderiza el botón para guardar', () => {
    renderWithProviders(
      <QuoteForm
        onCancel={mockOnCancel}
        updateData={mockUpdateData}
        updatePage={mockUpdatePage}
      />,
    );
    const input = screen.getByRole('button', { name: /Guardar/i });
    expect(input).toBeInTheDocument();
  });
  test('se renderiza el botón para cancelar', () => {
    renderWithProviders(
      <QuoteForm
        onCancel={mockOnCancel}
        updateData={mockUpdateData}
        updatePage={mockUpdatePage}
      />,
    );
    const input = screen.getByRole('button', { name: /Cancelar/i });
    expect(input).toBeInTheDocument();
  });
  test('Llama al submit con Toda la información', () => {
    renderWithProviders(
      <QuoteForm
        onCancel={mockOnCancel}
        updateData={mockUpdateData}
        updatePage={mockUpdatePage}
      />,
    );
    const phraseInput = screen.getByPlaceholderText(/Frase/i);
    const authorInput = screen.getByPlaceholderText(/Autor/i);
    const saveButton = screen.getByRole('button', { name: /Guardar/i });

    userEvent.type(phraseInput, 'this is a phrase');
    userEvent.type(authorInput, 'this is the author');
    userEvent.click(saveButton);
  });
  test('Llama a la acción de cancelar', () => {
    renderWithProviders(
      <QuoteForm
        onCancel={mockOnCancel}
        updateData={mockUpdateData}
        updatePage={mockUpdatePage}
      />,
    );
    const cancelButton = screen.getByRole('button', { name: /Cancelar/i });

    userEvent.click(cancelButton);
  });
});

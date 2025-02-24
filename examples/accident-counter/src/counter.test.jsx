import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  it('renders with an initial count of 0', () => {
    render(<Counter />);

    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    render(<Counter />);

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    const resetBtn = screen.getByRole('button', { name: /reset/i });

    expect(decrementBtn).toBeDisabled();
    expect(resetBtn).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    render(<Counter />);

    const unit = screen.getByTestId('counter-unit');
    expect(unit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    const counter = screen.getByTestId('counter-count');
    await userEvent.click(incrementBtn);
    expect(counter).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementBtn);
    const unit = screen.getByTestId('counter-unit');
    expect(unit).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    render(<Counter initialCount={1} />);

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    expect(decrementBtn).not.toBeDisabled();
    const counter = screen.getByTestId('counter-count');
    // await act(async () => {
    //   await userEvent.click(decrementBtn);
    // });
    await userEvent.click(decrementBtn);
    expect(counter).toHaveTextContent('0');
    expect(decrementBtn).toBeDisabled();
  });

  it('does not allow decrementing below 0', async () => {
    render(<Counter />);

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    const counter = screen.getByTestId('counter-count');
    await userEvent.click(decrementBtn);
    expect(counter).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    render(<Counter />);

    const resetBtn = screen.getByRole('button', { name: /reset/i });
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    const counter = screen.getByTestId('counter-count');
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(resetBtn);
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    render(<Counter />);

    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    const resetBtn = screen.getByRole('button', { name: /reset/i });

    expect(decrementBtn).toBeDisabled();
    expect(resetBtn).toBeDisabled();
  });

  it('updates the document title based on the count', async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);

    expect(document.title).toContain('2');
  });
});

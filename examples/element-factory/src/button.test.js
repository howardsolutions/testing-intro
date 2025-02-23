import { fireEvent, screen } from '@testing-library/dom';
import { createButton } from './button.js';
import { userEvent } from '@testing-library/user-event';

describe('createButton', () => {
  let button;

  afterEach(() => {
    document.body.innerHTML = '';
  });

  beforeEach(() => {
    document.body.appendChild(createButton());
    button = screen.getByRole('button', { name: 'Click Me' });
  });

  it('should create a button element', () => {
    expect(button).toBeInTheDocument();
  });

  it('should have the text "Click Me"', () => {
    expect(button).toHaveTextContent('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    // fireEvent(button, new MouseEvent('click'));
    await userEvent.click(button);

    expect(button).toHaveTextContent('Clicked');
  });
});

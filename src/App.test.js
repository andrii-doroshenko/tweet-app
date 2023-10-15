import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders load more button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/load more/i);
  expect(buttonElement).toBeInTheDocument();
});

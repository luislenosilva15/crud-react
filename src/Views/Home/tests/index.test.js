import { render, screen } from '@testing-library/react';
import Home from '../index'

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Users/i);
  expect(linkElement).toBeInTheDocument();
});

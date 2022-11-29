import { render, fireEvent, screen } from '@testing-library/react';
import Movies from '././Movies';

test('should render Movies component', () => {
  render(<Movies />);
  const movieElement = screen.getByTestId('movies-1');
  expect(movieElement).toBeInTheDocument(true);
});

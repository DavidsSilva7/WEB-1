import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});
function teste() {
  return(
    <h1>Olá, seja bem-vindo ao meu app!</h1>
  );
}

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tittle', () => {
  render(<App />);
  const linkElement = screen.getByText(/OrbitalAds frontend challenge/i);
  expect(linkElement).toBeInTheDocument();
});

// test to check fetch

test('fetch data', async () => {
  const response = await fetch('https://swapi.dev/api/people/?search=luke');
  const data = await response.json();
  expect(data.results[0].name).toBe('Luke Skywalker');
});








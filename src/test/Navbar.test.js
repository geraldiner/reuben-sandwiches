import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Navbar from '../components/Navbar.astro';

test('Navbar with link to home', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Navbar);
  expect(result).toContain('Reuben Sandwiches');
  expect(result).toContain('a').toContain('href="/"');
});
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Footer from '../components/Footer.astro';

test('Footer with links to personal website and tutorial', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Footer);

  expect(result)
    .toContain('Geraldine')
    .toContain('href="https://geraldiner.com"');
  // TODO:Update with real link after tutorial is live
  expect(result).toContain('You can build one too!').toContain('href="/"');
});

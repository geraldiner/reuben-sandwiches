import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import ItemCard from '../components/ItemCard.astro';

test('ItemCard with slots', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(ItemCard, {
    props: {
      restaurant: 'Testaurant',
      website: 'https://testaurant.example.com',
      item: 'Test Item',
      sides: 'fries',
      stars: 2,
      price: 9.5,
    },
  });
  expect(result)
    .toContain('Testaurant')
    .toContain('href="https://testaurant.example.com"');
  expect(result).toContain('Test Item');
  expect(result).toContain('🥪'.repeat(2));
  expect(result).toContain('✖️'.repeat(3));
  expect(result).toContain('$');
  expect(result).toContain('$9.50');
});

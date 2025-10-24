import js from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  ...astroPlugin.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  eslintPluginPrettierConfig,
  {
    ignores: ['node_modules', 'dist', 'build', '.astro'],
  },
  {
    rules: {
      'jsx-a11y/alt-text': 'warn',
    },
  },
]);

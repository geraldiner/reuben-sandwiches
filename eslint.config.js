import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    ignores: ['node_modules', 'dist', '.astro', 'build'],
  },

  js.configs.recommended,
  jsxA11y.flatConfigs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
    },
  },

  // ✅ ASTRO FILES
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: await import('astro-eslint-parser'),
      parserOptions: {
        parser: tsParser, // tells it to use TS inside the frontmatter
        extraFileExtensions: ['.astro'],
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      astro,
      jsxA11y,
    },
    rules: {
      ...astro.configs['flat/recommended'].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'jsx-a11y/alt-text': 'warn',
    },
  },

  // ✅ Prettier last to avoid rule conflicts
  {
    rules: {
      ...prettier.rules,
    },
  },
];

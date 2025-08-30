import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();

export default tseslint.config(
  // Recommended JavaScript configuration
  eslintJs.configs.recommended,

  // Recommended TypeScript configuration
  ...tseslint.configs.recommended,

  // Disables rules that conflict with Prettier
  prettierConfig,

  // Recommended rules from the Prettier plugin
  prettierPlugin,

  // Directories ignored by ESLint
  {
    ignores: ['node_modules', 'dist', '**/*.{js,cjs}'],
  },

  // Prettier custom rules
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          bracketSameLine: false,
          tabWidth: 2,
          endOfLine: 'auto',
        },
      ],
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
  },

  {
    ignores: ['.next'],
  },

  // Language and global environment settings
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },

  ...compat.config({
    extends: ['next/core-web-vitals'],
    rules: {
      'import/no-anonymous-default-export': 'off',
      '@next/next/no-html-link-for-pages': ['error', 'projects/web/.'],
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  }),
);

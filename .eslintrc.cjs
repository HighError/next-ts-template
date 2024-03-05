module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    // Next.js
    'next/core-web-vitals',

    // Airbnb
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',

    // Imports
    'plugin:import/recommended',
    'plugin:import/typescript',

    // Security
    'plugin:sonarjs/recommended',
    'plugin:security/recommended-legacy',
    'plugin:xss/recommended',

    // Library
    'plugin:lodash/recommended',

    // UI
    'plugin:tailwindcss/recommended',

    // Browser
    'plugin:compat/recommended',

    // Prettier
    'plugin:prettier/recommended',

    // Regexp
    'plugin:regexp/recommended',

    // Others
    'plugin:jsonc/base',
  ],
  plugins: ['lodash', 'json-format', 'no-secrets', 'simple-import-sort', 'unused-imports'],
  root: true,
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-secrets/no-secrets': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

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
    // No-secrets
    'no-secrets/no-secrets': 'error',

    // Import sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // Lodash
    'lodash/import-scope': [2, 'member'],
    'lodash/prefer-lodash-method': [2, { ignoreObjects: ['window.location', 'router'] }],

    // Conflict with Link icon
    'jsx-a11y/anchor-is-valid': 'off',

    // Remove unused imports
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

    // Others
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': 'off',
  },
};

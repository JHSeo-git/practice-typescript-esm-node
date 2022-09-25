/**
 * @see https://github.com/daangn/stackflow/blob/main/.eslintrc.js
 */
module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  plugins: ['json-format', 'simple-import-sort', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-exports': 'off',
    'no-shadow': 'off',
    'react/no-danger': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
  },
  ignorePatterns: ['**/lib/**/*', '**/dist/**/*'],
};

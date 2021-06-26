module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: ['error', 2, { SwitchCase: 2 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-tabs': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/no-unresolved': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/style-prop-object': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'ignore',
      }
    ],
  },
}

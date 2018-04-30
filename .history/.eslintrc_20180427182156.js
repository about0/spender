module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react', 'react-native', 'babel'],
  rules: {
    strict: 0,
    'react/prop-types': ['off'],
    'react/jsx-filename-extension': ['off'],
    'no-shadow': [
      'error',
      {
        allow: ['err'],
      },
    ],
    'generator-star-spacing': ['off'],
    'no-unused-expressions': ['off'],
    'no-param-reassign': ['off'],
    'arrow-body-style': ['off'],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'no-var': ['off'],
    'eslintIntegration'
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'no-underscore-dangle': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/no-unused-prop-types': ['off'],
    'react/prefer-stateless-function': ['off'],
    'max-len': ['off'],
    'class-methods-use-this': ['off'],
    'babel/new-cap': 1,
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': 0,
    'babel/quotes': 0,
    'babel/semi': 1,
    'babel/no-unused-expressions': 1,
  },
};

module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    'react-native/react-native': true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-native/all'
  ],
  globals: {
    __DEV__: true,
    global: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    'jest'
  ],
  rules: {
    'eslint no-underscore-dangle': ["error", { "allow": ["_session"] }],
    'no-console': ["log", { allow: ["warn"] }],
    'no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 80, 2, {
      'comments': 120,
      'ignoreUrls': true,
      'ignoreComments': false,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'no-use-before-define': [
      'error',
      {
        'functions': false,
        'classes': false
      }
    ],
    'no-nested-ternary': [0],
    'no-confusing-arrow': [0],
    'no-restricted-syntax': [
      'error',
      {
        'selector': 'LabeledStatement',
        'message': 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        'selector': 'WithStatement',
        'message': '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-prototype-builtins': [0],
    'no-shadow': [0],
    'arrow-parens': ['error', 'as-needed'],
    'prefer-promise-reject-errors': [0],
    'global-require': [0],
    'no-param-reassign': [0],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'consistent-return': [0],
    'indent': 'off',
    'indent-legacy': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 1
      }
    ],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'operator-linebreak': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'for' }
    ],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // React
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 0,
    'react/sort-comp': ['error', {
      'order': [
        'static-methods',
        'instance-variables',
        'getters',
        'setters',
        'lifecycle',
        'rendering',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'type-annotations'
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ],
        'rendering': [
          '/^render.+$/',
          'render'
        ]
      }
    }],
    'react/destructuring-assignment': [0],
    'react/forbid-prop-types': [0],
    'react/prefer-stateless-function': [0],
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [0],

    // React Native
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 1,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 2,
    'react-native/sort-styles': 0,

    'import/order': 'off',
    'import/no-unresolved': [0],
    'import/prefer-default-export': [0],
    'import/no-mutable-exports': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};

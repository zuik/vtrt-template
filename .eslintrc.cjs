module.exports = {
  extends: [
    'react-app', // or whatever you chose as your base config
    'plugin:prettier/recommended', // this will stop Prettier and ESLint from fighting over fixes
    'prettier/react', // optionally include this if you use React
  ],
  rules: {
    'react/jsx-sort-props': 'off',
  },
};

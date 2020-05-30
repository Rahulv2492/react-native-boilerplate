module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['react','import'],
  rules:{
    'react/prop-types': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils"
        },
      },
    },
  },
};

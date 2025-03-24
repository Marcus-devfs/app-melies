import { ConfigAPI } from '@babel/core';

export default function(api: ConfigAPI) {
  api.cache(true); // Usando o cache do Babel

  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
  };
}

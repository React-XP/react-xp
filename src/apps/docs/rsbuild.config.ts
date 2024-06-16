import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSourceBuild } from '@rsbuild/plugin-source-build';

console.log('process.env', JSON.stringify(process.env.BASE_HREF));

export default defineConfig({
  server: {
    port: 3100,
  },
  html: {
    template: './static/index.html',
  },
  output: {
    assetPrefix:
      process.env.NODE_ENV === 'development'
        ? undefined
        : 'https://react-xp.github.io/react-xp/',
  },
  plugins: [pluginReact(), pluginSourceBuild()],
});

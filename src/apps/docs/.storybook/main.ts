import type { StorybookConfig } from '@storybook/react-vite';

import { dirname, join } from 'node:path';

import { packages } from '../../../../repo.config.mjs';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const packageNames = packages.map((pkg) => pkg.name);

const mapStoriesForPackages = packageNames
  .map((pkg) => [
    `../../../packages/${pkg}/src/**/*.mdx`,
    `../../../packages/${pkg}/src/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  ])
  .reduce((acc, val) => acc.concat(val), []);

const config: StorybookConfig = {
  stories: [
    '../../../apps/docs/src/**/*.mdx',
    '../../../apps/docs/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ...mapStoriesForPackages,
  ],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    '@storybook/addon-themes',
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
};

export default config;

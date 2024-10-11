import { packages } from './repo.config.mjs';

const scopes = packages.map((pkg) => pkg.name);

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'BREAKING CHANGE',
      ],
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', ['docs', 'pipeline', 'utils', ...scopes]],
    'body-max-line-length': [0, 'never'],
  },
};

module.exports = {
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
    'scope-enum': [
      2,
      'always',
      ['global', 'docs', 'showcase', 'ui-builder', 'theme', 'ui', 'release'],
    ],
    'body-max-line-length': [0, 'never'],
  },
};

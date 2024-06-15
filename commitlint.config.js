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
    'scope-enum': [
      2,
      'always',
      ['global', 'docs', 'showcase', 'ui-builder', 'theme', 'ui'],
    ],
  },
};

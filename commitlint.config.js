module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [0], // Allow both with and without scope
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'perf',
        'ci',
        'build',
        'revert',
      ],
    ],
  },
};

module.exports = {
  branches: [
    'main',
    {
      name: 'develop',
      prerelease: 'beta',
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    // [
    //   '@semantic-release/npm',
    //   {
    //     npmPublish: true,
    //     tarballDir: 'dist',
    //   },
    // ],
    [
      '@glzr/semantic-release-npm',
      {
        npmPublish: true,
        tarballDir: 'dist',
        packageManager: 'pnpm',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message:
          'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    // [
    //   '@semantic-release/github',
    //   {
    //     assets: [{ path: 'dist/**' }],
    //   },
    // ],
  ],
};

module.exports = {
  branches: [
    'main',
    {
      name: 'develop',
      prerelease: 'beta',
    },
  ],
  tagFormat: 'v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/exec',
      {
        verifyReleaseCmd:
          'echo "NEXT_RELEASE_VERSION=${nextRelease.version}" >> $GITHUB_ENV',
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
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
  ],
};

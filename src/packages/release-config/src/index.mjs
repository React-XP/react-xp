import { packages } from '../../../../repo.config.mjs';

const allPackageNames = packages
  .filter((pkg) => pkg.publish)
  .map((pkg) => pkg.name);

export const makeSubPackageReleaseConfig = (packageName) => {
  const otherPackageNames = allPackageNames.filter(
    (pkg) => pkg !== packageName,
  );

  return {
    branches: [
      'main',
      {
        name: 'develop',
        prerelease: 'beta',
      },
    ],
    // use separate git tags for each subpackage
    tagFormat: `${packageName}-v\${version}`,
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'conventionalcommits',
          releaseRules: [
            // prevent commits like fix(otherPackageName): ... from triggering a release in this package
            ...otherPackageNames.flatMap((scope) => ({
              scope,
              release: false,
            })),
            ...[
              // allow commits like fix(packageName): ... to trigger a release in this package
              packageName,
              // scope: undefined allows unscoped commits like fix: ... to trigger a release in all monorepo pkgs
              undefined,
            ].flatMap((scope) => [
              { breaking: true, scope, release: 'major' },
              { revert: true, scope, release: 'patch' },
              { type: 'feat', scope, release: 'minor' },
              { type: 'fix', scope, release: 'patch' },
              { type: 'perf', scope, release: 'patch' },
            ]),
            // don't trigger a release for any other types of commits
            { scope: undefined, release: false },
          ],
        },
      ],
      [
        '@semantic-release/release-notes-generator',
        {
          changelogFile: 'CHANGELOG.md',
          preset: 'conventionalcommits',
          presetConfig: {
            types: [
              { type: 'build', section: 'Build System', hidden: true },
              { type: 'chore', section: 'Build System', hidden: true },
              {
                type: 'ci',
                section: 'Continuous Integration',
                hidden: true,
              },
              { type: 'style', section: 'Styles', hidden: true },
              { type: 'test', section: 'Tests', hidden: true },
              ...[
                { type: 'docs', section: 'Documentation' },
                { type: 'feat', section: 'Features' },
                { type: 'fix', section: 'Bug Fixes' },
                { type: 'perf', section: 'Performance Improvements' },
                { type: 'refactor', section: 'Code Refactoring' },
              ].flatMap((cfg) => [
                // include commits like fix(packageName): ... in the release notes for this package
                { ...cfg, scope: packageName, hidden: false },
                // exclude commits like fix(otherPackageName): ... from the release notes for this package
                ...otherPackageNames.map((otherPkg) => ({
                  ...cfg,
                  scope: otherPkg,
                  hidden: true,
                })),
                // include unscoped commits like fix: ... in the release notes for all packages
                { ...cfg, hidden: false },
              ]),
            ],
          },
        },
      ],
      '@jcoreio/semantic-release-npm',
      '@semantic-release/github',
    ],
    // plugins: [
    //   '@semantic-release/commit-analyzer',
    //   '@semantic-release/release-notes-generator',
    //   [
    //     '@semantic-release/changelog',
    //     {
    //       changelogFile: 'CHANGELOG.md',
    //     },
    //   ],
    //   // [
    //   //   '@semantic-release/npm',
    //   //   {
    //   //     npmPublish: true,
    //   //     tarballDir: 'dist',
    //   //   },
    //   // ],
    //   [
    //     '@glzr/semantic-release-npm',
    //     {
    //       npmPublish: true,
    //       tarballDir: 'dist',
    //       packageManager: 'pnpm',
    //     },
    //   ],
    //   [
    //     '@semantic-release/git',
    //     {
    //       assets: ['CHANGELOG.md'],
    //       message:
    //         'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    //     },
    //   ],
    //   [
    //     '@semantic-release/github',
    //     {
    //       assets: [{ path: 'dist/**' }],
    //     },
    //   ],
    // ],
  };
};

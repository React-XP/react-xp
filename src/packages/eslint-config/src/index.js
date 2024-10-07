import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  {
    ignores: [
      'dist',
      'build',
      'config',
      'node_modules',
      'public',
      'scripts',
      'src/react-app-env.d.ts',
      'src/serviceWorker.ts',
      'src/**/.azdo',
      'src/**/*.test.*',
      'src/packages/**/build',
      'src/packages/**/config',
      'src/packages/**/dist',
      'src/packages/**/node_modules',
      'src/packages/**/public',
      'src/packages/**/scripts',
      'src/packages/*/src/externalLibs',
      '**/package.json',
      '**/package-lock.json',
      '**/__stories__/**',
      '**/__tests__/**',
      '**/*.stories.*',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tsEslint.configs.recommended,
      // ...reactApp.config.recommended,
      // ...prettier.config.recommended,
      // ...sonarjsConfig.config.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      sonarjs: sonarjs,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      indent: 'off',
      'no-undef': 'off',
      '@typescript-eslint/indent': 'off',
      'no-unused-vars': 'off',
      'default-case': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
);

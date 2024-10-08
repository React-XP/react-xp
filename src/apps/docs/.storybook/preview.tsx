import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '@react-xp/theme/themeProvider';
import { action } from '@storybook/addon-actions';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  (Story, { parameters }) => {
    // 👇 Make it configurable by reading from parameters
    // const { pageLayout } = parameters;
    // switch (pageLayout) {
    //   case 'page':
    //     return (
    //       // Your page layout is probably a little more complex than this ;)
    //       <div className="page-layout">
    //         <Story />
    //       </div>
    //     );
    //   case 'page-mobile':
    //     return (
    //       <div className="page-mobile-layout">
    //         <Story />
    //       </div>
    //     );
    //   default:
    //     // In the default case, don't apply a layout
    //     return <Story />;
    // }

    return (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  args: {
    onClick: action('on-click'),
  },
};

export default preview;

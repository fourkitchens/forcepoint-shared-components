import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  // Typography
  fontBase: '"Hoves", sans-serif',
  fontCode: 'monospace',

  // Branding
  brandTitle: 'Forcepoint Shared Components Library',
  brandUrl: 'https://forcepoint.com',
  brandTarget: '_blank',
  brandImage: '../src/lib/assets/img/branding/logo-white.svg',

  // Main colors
  colorPrimary: '#ff2c6d',
  colorSecondary: '#00af9a',
});

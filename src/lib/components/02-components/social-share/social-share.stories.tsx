import type { Meta, StoryObj } from '@storybook/react';
import SocialShare from './social-share';

const meta = {
  title: 'Components/Social Share',
  component: SocialShare,
} satisfies Meta<typeof SocialShare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: 'https://www.example.com',
    title: 'Example Title',
    shareText: 'Share on',
    ariaNavLabel: 'Social media sharing',
  },
};

export const CustomColorNoBackground: Story = {
  args: {
    url: 'https://www.example.com',
    title: 'Example Title',
    shareText: 'Share on',
    ariaNavLabel: 'Social media sharing',
    iconColor: 'text-blue hover:text-viola',
    hasBackground: false,
    horizontal: true,
  },
};

export const SmallIconHorizontal: Story = {
  args: {
    url: 'https://www.example.com',
    title: 'Example Title',
    shareText: 'Share on',
    ariaNavLabel: 'Social media sharing',
    iconColor: 'text-viola',
    hasBackground: false,
    useSmallIcons: true,
    horizontal: true,
  },
};

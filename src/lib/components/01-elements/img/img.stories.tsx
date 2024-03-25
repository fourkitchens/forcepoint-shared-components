import type { Meta, StoryObj } from '@storybook/react';


import Img from './img';


const meta = {
  title: 'Elements/Image',
  component: Img,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    description: 'Placeholder image',
  },
};

export const ImageWithoutCaption: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    description: '',
  },
};

export const DarkTheme: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    description: 'Placeholder image',
    bgColor: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

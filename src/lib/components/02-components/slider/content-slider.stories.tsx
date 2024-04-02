import type { Meta, StoryObj } from '@storybook/react';
import ContentSlider from './content-slider';
import Typography from '../../01-elements/typography/typography';

type ChilrenComponentProps = {
  content: string;
  img: string;
};

const ChilrenComponent = ({ content, img }: ChilrenComponentProps) => {
  return (
    <>
      <Typography variant="body-2">{content}</Typography>
      <img className="inline sm:hidden" src={img} alt="" />
    </>
  );
};

const sliderItems = [
  {
    img: <img src="https://placehold.co/600x400/FFFF33/000000/png" alt="" />,
    title: 'Accordion item 1',
    cta: 'Go somewhere',
    ctaLink: '#',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
      img: 'https://placehold.co/600x400/FFFF33/000000/png',
    }),
  },
  {
    img: <img src="https://placehold.co/600x400/FF33FF/000000/png" alt="" />,
    title: 'Accordion item 2',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
      img: 'https://placehold.co/600x400/FF33FF/000000/png',
    }),
  },
  {
    img: <img src="https://placehold.co/600x400/33FFFF/000000/png" alt="" />,
    title: 'Accordion item 3',
    children: ChilrenComponent({
      content:
        'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
      img: 'https://placehold.co/600x400/33FFFF/000000/png',
    }),
  },
];

const meta = {
  title: 'Components/Sliders/Accordion Slider',
  component: ContentSlider,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    alignment: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    sliderTitle: {
      control: { type: 'text' },
    },
    sliderSubTitle: {
      control: { type: 'text' },
    },
    sliderItems: {
      control: { type: 'array' },
    },
  },
} satisfies Meta<typeof ContentSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    sliderItems: sliderItems,
  },
};

export const WithSubtitle: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    sliderSubTitle: 'Here goes a subtitle',
    sliderItems: sliderItems,
  },
};

export const ImagesOnTheRight: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    alignment: 'right',
    sliderItems: sliderItems,
  },
};

export const DarkTheme: Story = {
  args: {
    sliderTitle: 'Accordion Slider',
    sliderSubTitle: 'Here goes a subtitle',
    theme: 'dark',
    sliderItems: sliderItems,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
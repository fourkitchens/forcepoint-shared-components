import type { ElementType } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Typography from '../../01-elements/typography/typography';

export type LogoInfo = {
  alt: string;
  height?: string | number;
  src: string;
  width?: string | number;
};

export type LogoGridProps = {
  imageComponent?: ElementType;
  items: LogoInfo[];
  title?: string;
  subtitle?: string;
};

const templateColumns: Record<number, string> = {
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-4 lg:grid-cols-5',
  6: 'sm:grid-cols-4 lg:grid-cols-6',
};

export default function LogoGrid({
  imageComponent: Element = 'img',
  items,
  title,
  subtitle
}: LogoGridProps) {
  const columns: number = items.length < 6 ? items.length : 6;

  const titleRendered = title ? (
    <Typography
      variant="h2"
      component="h2"
      className="mb-sm text-center font-semibold leading-none text-navy md:mb-md"
    >
      {title}
    </Typography>
  ) : null;

  const subtitleRendered = subtitle ? (
    <Typography
      variant="h3"
      component="h3"
      className="mb-md text-center font-extralight leading-none text-chateau md:mb-lg"
    >
      {subtitle}
    </Typography>
  ) : null;

  const renderLogoItem = (item: LogoInfo, index: number) => (
    <li key={index} className="h-[100px] w-[170px] px-lg py-md sm:w-[200px]">
      <Element
        className="mx-auto h-full w-full object-contain"
        src={item.src}
        alt={item.alt}
        {...(item.width && { width: item.width })}
        {...(item.height && { height: item.height })}
      />
    </li>
  );

  return (
    <div className="mx-auto my-lg md:my-xl md:max-w-screen-lg">
      {titleRendered}
      {subtitleRendered}
      <ul
        className={cn(
          'mx-auto grid w-fit grid-cols-2',
          templateColumns[columns],
        )}
      >
        {items?.length > 0 && items.map(renderLogoItem)}
      </ul>
    </div>
  );
}

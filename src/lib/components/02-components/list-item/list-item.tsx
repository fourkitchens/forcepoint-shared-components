import { ElementType, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import { CircleCheckmarkIcon } from '../../00-tokens/icons';
import Link from '../../01-elements/link/link';

export type ListItemStyleType = 'none' | 'checkmark' | 'icon';

export type ListItemProps = {
  title?: string | null;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style: ListItemStyleType;
  text?: ReactNode;
  link?: {
    title: string;
    url: string;
  } | null;
  linkComponent?: ElementType;
  icon?: {
    url: string;
    alt?: string | null;
    height: number | 'auto';
    width: number | 'auto';
  };
  noBottomBorder?: boolean;
};

export default function ListItem({
  title,
  headingLevel: HeadingLevel = 'h3',
  style,
  text,
  icon,
  link,
  linkComponent = 'a',
  noBottomBorder,
}: ListItemProps) {
  const containerClasses = cn(
    [
      'last:border-b-0',
      'group-[.multicol]:sm:px-[30px]',
      'group-[.multicol]:sm:max-md:odd:pl-md',
      'group-[.multicol]:sm:max-md:even:pr-md',
      'group-[.multicol]:md:[&:nth-child(3n)]:pr-md',
      'group-[.multicol]:md:[&:nth-child(3n+1)]:pl-md',
      'group-[.multicol]:sm:max-md:[&:nth-last-child(2):not(:nth-child(even))]:border-b-0',
      'group-[.multicol]:md:[&:nth-last-child(2):not(:nth-child(3n))]:border-b-0',
      'group-[.multicol]:md:[&:nth-last-child(3):not(:nth-child(3n+2)):not(:nth-child(3n))]:border-b-0',
    ],
    {
      flex: style !== 'none',
      'items-start': style !== 'none',
      'gap-md': style === 'checkmark',
      'gap-sm': style === 'icon',
      'sm:gap-lg': style === 'icon',
      'mb-md': style === 'checkmark',
      'mt-md pb-md sm:mt-lg sm:pb-lg': style !== 'checkmark',
      'border-b-2 border-b-brumosa': style !== 'checkmark',
      'border-b-0': noBottomBorder && style === 'icon',
    },
  );

  const renderedIcon = {
    none: null,
    checkmark: (
      <CircleCheckmarkIcon className="mt-xs flex-shrink-0 flex-grow-0 text-teal" />
    ),
    icon: icon ? (
      <div className="flex-shrink-0 flex-grow-0 basis-[50px] sm:basis-[80px]">
        <img
          src={icon.url}
          role="presentation"
          alt={icon.alt ?? ''}
          height={icon.height}
          width={icon.width}
          className="h-auto w-full"
        />
      </div>
    ) : null,
  };

  return (
    <li className={containerClasses}>
      {renderedIcon[style]}
      <div>
        {title && (
          <HeadingLevel className="mb-sm text-h3 font-semibold text-black">
            {title}
          </HeadingLevel>
        )}
        {text && <div className="text-body-2 text-grey">{text}</div>}
        {link && (
          <Link
            component={linkComponent}
            href={link.url}
            className="mt-md text-h4 font-semibold">
            {link.title}
          </Link>
        )}
      </div>
    </li>
  );
}

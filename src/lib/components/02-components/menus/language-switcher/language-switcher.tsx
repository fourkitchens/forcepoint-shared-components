import { ElementType } from 'react';
import SecondaryMenu, {
  SecondaryMenuItemProps,
} from '../secondary-menu/secondary-menu';

export type LocaleMenuItem = {
  active: boolean;
  linkProps?: {
    [key: string]: string;
  };
  localeCode: string;
  localeName: string;
};

export type LanguageSwitcherProps = {
  handlerCloseMenu?: () => void;
  linkComponent?: ElementType;
  locales: LocaleMenuItem[];
  menuLabel?: string;
  onFooter?: boolean;
  url: string;
};

export default function LanguageSwitcher({
  handlerCloseMenu,
  linkComponent: LinkComponent = 'a',
  locales,
  menuLabel = 'Language switcher',
  onFooter = false,
  url,
}: LanguageSwitcherProps) {
  // Move active locale to the beginning of the array
  const activeIndex = locales.findIndex((locale) => locale.active);
  if (activeIndex > -1) {
    const [activeLocale] = locales.splice(activeIndex, 1);
    locales.unshift(activeLocale);
  }

  const belowItems: SecondaryMenuItemProps[] = locales.map((item) => ({
    title: item.localeName,
    url: url,
    active: item.active,
    linkProps: item.linkProps,
  }));

  const activeLocaleName =
    locales.find((locale) => locale.active)?.localeName || '';

  const menuItems: SecondaryMenuItemProps = {
    title: activeLocaleName,
    below: belowItems,
  };

  return (
    <SecondaryMenu
      items={[menuItems]}
      onFooter={onFooter}
      menuLabel={menuLabel}
      isLanguageSwitcher={true}
      menuClass="language-switcher"
      linkComponent={LinkComponent}
      handlerCloseMenu={handlerCloseMenu}
    />
  );
}

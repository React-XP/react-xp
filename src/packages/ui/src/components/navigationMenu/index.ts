import { NavigationMenu as NavigationMenuPrimitive } from './navigationMenu';
import { NavigationMenuContent } from './navigationMenuContent';
import { NavigationMenuIndicator } from './navigationMenuIndicator';
import { NavigationMenuItem } from './navigationMenuItem';
import { NavigationMenuLink } from './navigationMenuLink';
import { NavigationMenuList } from './navigationMenuList';
import {
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './navigationMenuTrigger';
import { NavigationMenuViewport } from './navigationMenuViewPort';

export const NavigationMenu = Object.assign(NavigationMenuPrimitive, {
  Content: NavigationMenuContent,
  Indicator: NavigationMenuIndicator,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Trigger: NavigationMenuTrigger,
  Viewport: NavigationMenuViewport,
  styles: {
    getNavigationMenuTriggerStyle: navigationMenuTriggerStyle,
  },
});

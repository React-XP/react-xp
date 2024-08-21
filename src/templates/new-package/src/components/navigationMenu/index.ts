import { NavigationMenu as NavigationMenuBase } from './navigationMenu';
import { NavigationMenuContent } from './primitives/navigationMenuContent';
import { NavigationMenuIndicator } from './primitives/navigationMenuIndicator';
import { NavigationMenuItem } from './primitives/navigationMenuItem';
import { NavigationMenuLink } from './primitives/navigationMenuLink';
import { NavigationMenuList } from './primitives/navigationMenuList';
import {
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './primitives/navigationMenuTrigger';
import { NavigationMenuViewport } from './primitives/navigationMenuViewPort';

export const NavigationMenu = Object.assign(NavigationMenuBase, {
  Primitives: {
    Content: NavigationMenuContent,
    Indicator: NavigationMenuIndicator,
    Item: NavigationMenuItem,
    Link: NavigationMenuLink,
    List: NavigationMenuList,
    Trigger: NavigationMenuTrigger,
    Viewport: NavigationMenuViewport,
  },
  styles: {
    getNavigationMenuTriggerStyle: navigationMenuTriggerStyle,
  },
});

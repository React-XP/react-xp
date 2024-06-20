import { Box } from '../box';
import { NavigationMenu as NavigationMenuPrimitive } from './primitives/navigationMenu';
import { NavigationMenuContent } from './primitives/navigationMenuContent';
import { NavigationMenuItem } from './primitives/navigationMenuItem';
import { NavigationMenuLink } from './primitives/navigationMenuLink';
import { NavigationMenuList } from './primitives/navigationMenuList';
import {
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './primitives/navigationMenuTrigger';

type TNavigationMenuItem = {
  key: string;
  title: string;
  content?: React.ReactNode;
  href?: string;
  render?: React.ReactNode;
};

type TNavigationMenuProps = {
  items: {
    start?: TNavigationMenuItem[];
    middle?: TNavigationMenuItem[];
    end?: TNavigationMenuItem[];
  };
};

export const NavigationMenu = ({ items }: TNavigationMenuProps) => {
  const { end, middle, start } = items;
  return (
    <NavigationMenuPrimitive className="max-w-full">
      <Box dir="horizontal" className="p-4 justify-between w-full">
        <Box className="justify-start">
          <NavigationMenuList>
            {start?.map((item) => {
              if (item.render) {
                return item.render;
              }

              if (item.content) {
                return (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.content}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.key}>
                  <a href={item.href}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </Box>

        <Box className="grow justify-center">
          <NavigationMenuList>
            {middle?.map((item) => {
              if (item.render) {
                return item.render;
              }

              if (item.content) {
                return (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.content}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.key}>
                  <a href={item.href}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </Box>

        <Box className="justify-end">
          <NavigationMenuList>
            {end?.map((item) => {
              if (item.render) {
                return item.render;
              }

              if (item.content) {
                return (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.content}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.key}>
                  <a href={item.href}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </Box>
      </Box>
    </NavigationMenuPrimitive>
  );
};

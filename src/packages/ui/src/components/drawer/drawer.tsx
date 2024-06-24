import type React from 'react';
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  Drawer as DrawerPrimitive,
  DrawerTitle,
  DrawerTrigger,
} from './primitives/drawer';

interface DrawerProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  trigger?: React.ReactNode;
}

export const Drawer = ({ description, title, trigger }: DrawerProps) => {
  return (
    <DrawerPrimitive>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          {/* <Button>Submit</Button> */}
          <DrawerClose>
            {/* <Button variant="outline">Cancel</Button> */}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerPrimitive>
  );
};

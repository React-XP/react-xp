import { DropdownMenu as DropdownMenuBase } from './dropdownMenu';
import * as DropdownMenuPrimitives from './primitives/dropdownMenu';

export const DropdownMenu = Object.assign(DropdownMenuBase, {
  Primitives: {
    ...DropdownMenuPrimitives,
  },
});

import { useTheme } from '@react-xp/theme/useTheme';
import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { Button } from '../button';
import { DropdownMenu } from '../dropdownMenu';

export function ThemeToggle() {
  const { availableThemes, setTheme } = useTheme();

  return (
    <DropdownMenu.Primitives.DropdownMenu>
      <DropdownMenu.Primitives.DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Primitives.DropdownMenuTrigger>
      <DropdownMenu.Primitives.DropdownMenuContent align="end">
        {availableThemes.map((theme) => (
          <DropdownMenu.Primitives.DropdownMenuItem
            key={theme}
            onClick={() => setTheme(theme)}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </DropdownMenu.Primitives.DropdownMenuItem>
        ))}
      </DropdownMenu.Primitives.DropdownMenuContent>
    </DropdownMenu.Primitives.DropdownMenu>
  );
}

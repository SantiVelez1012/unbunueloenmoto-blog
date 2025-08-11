'use client';

import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/features/shared/presentation/contexts/themeContext';

interface SharedThemeToggleProps {
  variant?: 'button' | 'dropdown';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SharedThemeToggle({ 
  variant = 'dropdown', 
  size = 'md',
  className = '' 
}: SharedThemeToggleProps) {
  const { theme, setTheme, actualTheme } = useTheme();

  const getIcon = () => {
    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
    switch (theme) {
      case 'light':
        return <Sun size={iconSize} />;
      case 'dark':
        return <Moon size={iconSize} />;
      default:
        return <Monitor size={iconSize} />;
    }
  };

  const getDisplayTheme = () => {
    if (theme === 'system') {
      return actualTheme === 'dark' ? 'Oscuro (Sistema)' : 'Claro (Sistema)';
    }
    return theme === 'dark' ? 'Oscuro' : 'Claro';
  };

  const buttonSizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';

  if (variant === 'button') {
    const cycleTheme = () => {
      const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
      const currentIndex = themes.indexOf(theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      setTheme(themes[nextIndex]);
    };

    return (
      <button
        onClick={cycleTheme}
        className={`btn btn-ghost btn-circle ${buttonSizeClass} ${className}`}
        title={`Tema actual: ${getDisplayTheme()}`}
      >
        {getIcon()}
      </button>
    );
  }

  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <div 
        tabIndex={0} 
        role="button" 
        className={`btn btn-ghost btn-circle ${buttonSizeClass}`}
        title={`Tema actual: ${getDisplayTheme()}`}
      >
        {getIcon()}
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44 p-2 shadow-lg border border-base-300">
        <li>
          <button
            onClick={() => setTheme('light')}
            className={`flex items-center gap-2 ${theme === 'light' ? 'active' : ''}`}
          >
            <Sun size={16} />
            Claro
          </button>
        </li>
        <li>
          <button
            onClick={() => setTheme('dark')}
            className={`flex items-center gap-2 ${theme === 'dark' ? 'active' : ''}`}
          >
            <Moon size={16} />
            Oscuro
          </button>
        </li>
        <li>
          <button
            onClick={() => setTheme('system')}
            className={`flex items-center gap-2 ${theme === 'system' ? 'active' : ''}`}
          >
            <Monitor size={16} />
            Sistema
          </button>
        </li>
      </ul>
    </div>
  );
}
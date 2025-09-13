import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

const themes = [
  { name: 'Default', class: 'theme-default', primary: '#1e40af', accent: '#f97316' },
  { name: 'Ocean', class: 'theme-ocean', primary: '#0891b2', accent: '#06b6d4' },
  { name: 'Forest', class: 'theme-forest', primary: '#059669', accent: '#10b981' },
  { name: 'Sunset', class: 'theme-sunset', primary: '#dc2626', accent: '#f59e0b' },
  { name: 'Purple', class: 'theme-purple', primary: '#7c3aed', accent: '#a855f7' }
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('theme-default');
  const [isOpen, setIsOpen] = useState(false);

  const changeTheme = (themeClass: string) => {
    // Remove all theme classes
    themes.forEach(theme => {
      document.documentElement.classList.remove(theme.class);
    });
    // Add new theme class
    document.documentElement.classList.add(themeClass);
    setCurrentTheme(themeClass);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
        >
          <Palette className="w-4 h-4 mr-2" />
          Themes
        </Button>
        
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white rounded-lg shadow-xl border p-2 min-w-[160px] animate-fade-in">
            <div className="text-sm font-medium text-gray-700 mb-2 px-2">Choose Theme</div>
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => changeTheme(theme.class)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100 transition-colors ${
                  currentTheme === theme.class ? 'bg-gray-100' : ''
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: theme.primary }}
                />
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: theme.accent }}
                />
                <span className="text-sm">{theme.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
import { useState } from 'react';
import { themeOptions } from './theme';
import ThemeOptions from './ThemeOptions';

export default function Themes() {
  const [selectedTheme, setSelectedTheme] = useState('light');
  return (
    <section>
      <h1>Themes</h1>
      <ThemeOptions
        themeOptions={themeOptions}
        selectedTheme={selectedTheme}
        onThemeClick={theme => setSelectedTheme(theme)}
      />
    </section>
  );
}

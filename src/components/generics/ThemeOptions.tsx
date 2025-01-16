import React from 'react';

type ThemeOptionsProps<T> = {
  themeOptions: T[];
  selectedTheme: T;
  onThemeClick: (theme: T) => void;
};

export default function ThemeOptions<T extends React.ReactNode>({
  themeOptions,
  selectedTheme,
  onThemeClick
}: ThemeOptionsProps<T>) {
  return (
    <>
      <ul>
        {themeOptions.map((theme, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            <button onClick={() => onThemeClick(theme)}>{theme}</button>
          </li>
        ))}
      </ul>
      <p>
        Selected theme: <strong>{selectedTheme}</strong>
      </p>
    </>
  );
}

import { useTheme } from './ThemeContext';

export default function Box() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.primary.main, color: theme.secondary.text }}>
      Theme context
    </div>
  );
}

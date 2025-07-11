'use client';

import { CssBaseline } from '@mui/material';
import { CssVarsProvider } from '@mui/material/styles';
import theme from '../MUI/palette';

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <CssVarsProvider
      theme={theme} // ✅ no lo remezcles aquí
      defaultMode="system"
      attribute="data-color-scheme"
      modeStorageKey="mui-mode"
    >
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}

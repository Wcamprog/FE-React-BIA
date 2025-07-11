'use client';

import { useEffect, useState } from 'react';
import { useColorScheme } from '@mui/material/styles';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Box, Typography, Button } from '@mui/material';

export default function Header() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) return null;

  const toggleMode = () => {
    if (typeof setMode === 'function') {
      setMode(mode === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '7vh',
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: 1,
        px: 3,
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Where in the world?
      </Typography>
      <Button
        onClick={toggleMode}
        startIcon={mode === 'dark' ? <FaSun /> : <FaMoon />}
        sx={{ color: 'text.primary', textTransform: 'none' }}
      >
        {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </Box>
  );
}

import { Button, listClasses, Menu, Typography } from '@mui/material';
import { Iconify } from '../iconify';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useState } from 'react';

export function Select({ title, options, value, onChange, sx = {} }) {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box sx={{ ...sx }}>
      <Button
        disableRipple
        color="inherit"
        onClick={(e) => setOpen(e.currentTarget)}
        endIcon={
          <Iconify
            icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'}
          />
        }
      >
        {title}&nbsp;
        <Typography
          component="span"
          variant="subtitle2"
          sx={{ color: 'text.secondary' }}
        >
          {options.find((option) => option.value === value)?.label}
        </Typography>
      </Button>
      <Menu
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              [`& .${listClasses.root}`]: {
                p: 0,
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === 'newest'}
            onClick={() => {
              handleClose();
              onChange(option.value);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

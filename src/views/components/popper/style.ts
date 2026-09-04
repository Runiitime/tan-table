import { SxProps } from '@mui/system';

export const Popper = (width: number): SxProps => ({
  zIndex: '2000',
  width: width,
});

export const Anchor = (disabled: boolean): SxProps => ({
  pointerEvents: disabled ? 'none' : undefined,
});

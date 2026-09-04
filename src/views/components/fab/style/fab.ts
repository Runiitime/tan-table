import { SxProps } from '@mui/system';

import {InterfaceMD3} from "@assets/md3";

export const Fab: SxProps = {
  overflow: 'hidden',
  zIndex: 899,

  '&.MuiFab-sizeSmall': {
    width: '40px',
    height: '40px',
    borderRadius: InterfaceMD3.shape.corner.medium,
  },

  '&.MuiFab-sizeMedium': {
    width: '56px',
    height: '56px',
    borderRadius: InterfaceMD3.shape.corner.large,
  },

  '&.MuiFab-sizeLarge': {
    width: '96px',
    height: '96px',
    borderRadius: InterfaceMD3.shape.corner.extraLarge,

    '& .MuiSvgIcon-root': {
      fontSize: '36px',
    },
  },

  '&.Mui-focusVisible .MuiTouchRipple-root': {
    display: 'none',
  },

  '& .state-layer': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'transparent',
  },
};

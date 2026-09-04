import { SxProps } from '@mui/system';

import { InterfaceMD3 } from "@assets/md3";

export const Plain: SxProps = {
  padding: '8px',
  minHeight: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  width: 'max-content',
  maxWidth: '280px',

  '@media print': {
    display: 'none',
  },

  /** ENABLED */
  // Container
  background: InterfaceMD3.color.inverseSurface,
  borderRadius: InterfaceMD3.shape.corner.extraSmall,

  // Supporting text
  color: InterfaceMD3.color.inverseOnSurface,
  wordBreak: 'break-all',
};

import { SxProps } from '@mui/system';

import { InterfaceMD3 } from "@assets/md3";

export const Rich: SxProps = {
  padding: '12px 16px 8px 16px',
  cursor: 'pointer',

  width: 'max-content',
  maxWidth: '320px',

  '@media print': {
    display: 'none',
  },

  /** ENABLED */
  // Container
  background: InterfaceMD3.color.surfaceContainer,
  boxShadow: InterfaceMD3.elevation.level2,
  borderRadius: InterfaceMD3.shape.corner.medium,

  // Subhead
  '& .tooltip__subhead': {
    color: InterfaceMD3.color.onSurfaceVariant,
    marginBottom: '4px',
    wordBreak: 'break-all',
  },

  // Supporting text
  '& .tooltip__supporting-text': {
    color: InterfaceMD3.color.onSurfaceVariant,
    wordBreak: 'break-all',
  },

  // Actions
  '& .tooltip__actions': {
    marginTop: '12px',
  },
};

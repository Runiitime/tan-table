import { SxProps } from '@mui/system';

import {InterfaceMD3} from "@assets/md3";

import { Fab } from './fab';

export const Primary: SxProps = {
  ...Fab,

  /** ENABLED */
  // Container
  background: InterfaceMD3.color.primaryContainer,
  boxShadow: InterfaceMD3.elevation.level3,

  // Icon
  '& .MuiSvgIcon-root': {
    color: InterfaceMD3.color.onPrimaryContainer,
  },

  /** HOVERED */
  '&:hover': {
    // Container
    background: InterfaceMD3.color.primaryContainer,
    boxShadow: InterfaceMD3.elevation.level4,

    // State layer
    '& .state-layer': {
      background: InterfaceMD3.color.onPrimaryContainer,
      opacity: InterfaceMD3.state.hover.stateLayerOpacity,
    },

    '& .MuiSvgIcon-root': {
      zIndex: 5,
      color: InterfaceMD3.color.onPrimaryContainer,
    },
  },

  /** FOCUSED */
  '&.Mui-focusVisible': {
    // Container
    background: InterfaceMD3.color.primaryContainer,

    // FocusIndicator
    boxShadow: `inset 0 0 0 ${InterfaceMD3.state.focusIndicator.outerOffset} ${InterfaceMD3.color.surface}, ${InterfaceMD3.elevation.level3}`,
    border: `${InterfaceMD3.state.focusIndicator.thickness} solid ${InterfaceMD3.color.secondary}`,

    // State layer
    '.state-layer': {
      background: InterfaceMD3.color.onPrimaryContainer,
      opacity: InterfaceMD3.state.focus.stateLayerOpacity,
    },

    // Icon
    '& .MuiSvgIcon-root': {
      zIndex: 5,
      color: InterfaceMD3.color.onPrimaryContainer,
    },
  },
};

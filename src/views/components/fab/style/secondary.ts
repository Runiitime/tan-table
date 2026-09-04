import { SxProps } from '@mui/system';

import {InterfaceMD3} from "@assets/md3";

import { Fab } from './fab';

export const Secondary: SxProps = {
  ...Fab,

  /** ENABLED */
  // Container
  background: InterfaceMD3.color.secondaryContainer,
  boxShadow: InterfaceMD3.elevation.level3,

  // Icon
  '& .MuiSvgIcon-root': {
    color: InterfaceMD3.color.onSecondaryContainer,
  },

  /** HOVERED */
  '&:hover': {
    // Container
    background: InterfaceMD3.color.secondaryContainer,
    boxShadow: InterfaceMD3.elevation.level4,

    // State layer
    '& .state-layer': {
      background: InterfaceMD3.color.onSecondaryContainer,
      opacity: InterfaceMD3.state.hover.stateLayerOpacity,
    },

    '& .MuiSvgIcon-root': {
      zIndex: 5,
      color: InterfaceMD3.color.onSecondaryContainer,
    },
  },

  /** FOCUSED */
  '&.Mui-focusVisible': {
    // Container
    background: InterfaceMD3.color.secondaryContainer,

    // FocusIndicator
    boxShadow: `inset 0 0 0 ${InterfaceMD3.state.focusIndicator.outerOffset} ${InterfaceMD3.color.surface}, ${InterfaceMD3.elevation.level3}`,
    border: `${InterfaceMD3.state.focusIndicator.thickness} solid ${InterfaceMD3.color.secondary}`,

    // State layer
    '.state-layer': {
      background: InterfaceMD3.color.onSecondaryContainer,
      opacity: InterfaceMD3.state.focus.stateLayerOpacity,
    },

    // Icon
    '& .MuiSvgIcon-root': {
      zIndex: 5,
      color: InterfaceMD3.color.onSecondaryContainer,
    },
  },
};

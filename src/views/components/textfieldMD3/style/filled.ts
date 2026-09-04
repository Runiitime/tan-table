import { SxProps } from '@mui/system';

import { InterfaceMD3 } from "@assets/md3";
import { hexToRGBAStyle } from "@helpers/color";

export const Filled: SxProps = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: '56px',
  overflow: 'hidden',

  /** ENABLED */
  // Container
  background: InterfaceMD3.color.surfaceContainerHighest,
  borderRadius: InterfaceMD3.shape.corner.extraSmallTop,
  boxSizing: 'border-box',

  // State layer
  '& .state-layer': {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  // Label text
  '& .label-text': {
    position: 'absolute',
    top: '50%',
    left: '16px',
    transform: 'translateY(-50%)',

    color: InterfaceMD3.color.onSurfaceVariant,

    transition: 'all 0.1s',

    '&_focused': {
      top: '8px',
      transform: 'none',
      color: InterfaceMD3.color.primary,

      '&:hover': {
        cursor: 'default !important',
      },
    },

    '&_with-input-value': {
      top: '8px',
      transform: 'none',
    },

    '&_with-leading-icon': {
      left: '52px',
    },

    '&:hover': {
      cursor: 'text',
    },
  },

  '&.text-field_multiline .label-text': {
    top: 'auto',

    '&_focused, &_with-input-value': {
      top: '8px',
    },
  },

  // Leading icon
  '& .leading-icon': {
    display: 'flex',
    marginLeft: '12px',
    color: InterfaceMD3.color.onSurfaceVariant,
    pointerEvents: 'none',
    zIndex: 5,
  },

  // Trailing icon
  '& .trailing-icon': {
    display: 'flex',
    marginRight: '12px',
    color: InterfaceMD3.color.onSurfaceVariant,
    zIndex: 5,

    '&:hover': {
      cursor: 'pointer',
    },
  },

  // Active indicator
  borderBottom: `1px solid ${InterfaceMD3.color.onSurfaceVariant}`,

  // Prefix
  '& .prefix': {
    display: 'flex',
    height: '100%',
    alignItems: 'flex-end',
    padding: '0 4px 7px 16px',
    zIndex: 5,
    color: InterfaceMD3.color.onSurfaceVariant,
    cursor: 'text',

    opacity: 0,
    transition: 'opacity 0.1s',

    '&_activated': {
      opacity: 1,
    },
  },

  // End controls
  '& .end-controls': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    zIndex: 5,
  },

  // Suffix
  '& .suffix': {
    display: 'flex',
    height: '100%',
    alignItems: 'flex-end',
    padding: '0 16px 7px 8px',
    zIndex: 5,
    color: InterfaceMD3.color.onSurfaceVariant,
    cursor: 'text',

    opacity: 0,
    transition: 'opacity 0.1s',

    '&_activated': {
      opacity: 1,
    },
  },

  // Input wrapper
  '& .input-wrapper': {
    padding: '24px 16px 8px 16px',
    flexGrow: '1',
    zIndex: 5,

    '&_with-prefix': {
      paddingLeft: '0',
    },
    '&_with-suffix': {
      paddingRight: '0',
    },

    '&:hover': {
      cursor: 'text',
    },
  },

  // Input text
  '& .input': {
    outline: 'none',
    border: 'none',
    background: 'none',
    width: '100%',
    height: '100%',
    paddingBlock: '0',
    paddingInline: '0',

    color: InterfaceMD3.color.onSurface,
    fontFamily: InterfaceMD3.typescale.body.large.font,
    lineHeight: InterfaceMD3.typescale.body.large.lineHeight,
    fontSize: InterfaceMD3.typescale.body.large.size,
    fontWeight: InterfaceMD3.typescale.body.large.weight,
    letterSpacing: InterfaceMD3.typescale.body.large.tracking,

    '&::placeholder': {
      opacity: 0,
      color: InterfaceMD3.color.onSurfaceVariant,
      transition: 'opacity 0.1s',
    },

    '&_focused::placeholder': {
      opacity: 1,
    },

    '&_placeholder-visible::placeholder': {
      opacity: 1,
    },

    // Caret
    caretColor: InterfaceMD3.color.primary,
  },

  /** DISABLED */
  '&.text-field_disabled': {
    // Container
    background: hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.04'),
    cursor: 'default',

    // State layer
    '& .state-layer': {
      display: 'none',
    },

    // Label text
    '& .label-text': {
      color: `${hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38')} !important`,
      cursor: 'default',
    },

    // Leading icon
    '& .leading-icon': {
      color: hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38'),
      cursor: 'default',
    },

    // Trailing icon
    '& .trailing-icon': {
      color: `${hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38')} !important`,
      cursor: 'default',
    },

    // Input wrapper
    '& .input-wrapper': {
      cursor: 'default',
    },

    // Input text
    '& .input': {
      color: hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38'),
      cursor: 'default',
    },

    // Active indicator
    borderBottom: `1px solid ${hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38')} !important`,

    // Prefix
    '& .prefix': {
      color: hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38'),
      cursor: 'default',
    },

    // Suffix
    '& .suffix': {
      color: hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38'),
      cursor: 'default',
    },
  },

  /** HOVERED */
  '&:hover': {
    // State layer
    '& .state-layer': {
      background: hexToRGBAStyle(InterfaceMD3.color.onSurface, InterfaceMD3.state.hover.stateLayerOpacity),
    },

    // Active indicator
    borderBottom: `1px solid ${InterfaceMD3.color.onSurface}`,
  },

  /** FOCUSED */
  '&.text-field_focused': {
    // Active indicator
    borderBottom: `2px solid ${InterfaceMD3.color.primary}`,

    // Input wrapper
    '& .input-wrapper': {
      paddingBottom: '7px',
    },

    // Leading icon
    '& .leading-icon': {
      marginBottom: '-1px',
    },

    // Prefix
    '& .prefix': {
      marginBottom: '-1px',
    },

    // End controls
    '& .end-controls': {
      marginBottom: '-1px',
    },
  },

  /** ERROR */
  '&.text-field_error': {
    // Active indicator
    borderColor: InterfaceMD3.color.error,

    // Label text
    '& .label-text': {
      color: InterfaceMD3.color.error,
    },

    // Trailing icon
    '& .trailing-icon': {
      color: InterfaceMD3.color.error,
    },

    // Hover
    '&:hover': {
      // Active indicator
      borderColor: InterfaceMD3.color.onErrorContainer,

      // Label text
      '& .label-text': {
        color: InterfaceMD3.color.onErrorContainer,
      },

      // Trailing icon
      '& .trailing-icon': {
        color: InterfaceMD3.color.onErrorContainer,
      },
    },
  },
};

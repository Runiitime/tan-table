import { SxProps } from '@mui/system';

import { InterfaceMD3 } from "@assets/md3";
import { hexToRGBAStyle } from "@helpers/color";

export const Outlined: SxProps = {
  display: 'flex',
  alignItems: 'center',

  /** ENABLED */
  // Container
  minHeight: '56px',
  borderRadius: InterfaceMD3.shape.corner.extraSmall,

  // Outline
  border: `1px solid ${InterfaceMD3.color.outline}`,

  // Input wrapper
  '& .input-wrapper': {
    padding: '0 16px',
    flexGrow: '1',
    zIndex: 5,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',

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

  // Label text
  '& .label-text': {
    position: 'absolute',
    background: 'none',
    color: InterfaceMD3.color.onSurfaceVariant,
    backdropFilter: 'blur(100px)',

    transition: 'all 0.1s',

    '&_focused': {
      top: '1px',
      left: '12px !important',
      transform: 'translateY(-50%)',
      padding: '0 4px',

      color: InterfaceMD3.color.primary,

      '&:hover': {
        cursor: 'default !important',
      },
    },

    '&_with-input-value': {
      top: '1px',
      left: '12px !important',
      transform: 'translateY(-50%)',
      padding: '0 4px',
    },

    '&_with-prefix': {
      left: '16px',
    },

    '&_with-leading-icon': {
      left: '52px',
    },

    '&:hover': {
      cursor: 'text',
    },
  },

  '&.text-field_multiline .label-text': {
    top: '20px',

    '&_focused, &_with-input-value': {
      top: '1px',
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

  // Input text
  '& .input': {
    outline: 'none',
    border: 'none',
    background: 'none',
    width: '100%',
    height: '24px',
    padding: '0',
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

  // Prefix
  '& .prefix': {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    padding: '0 4px 0 16px',
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
    alignItems: 'center',
    padding: '0 16px 0 8px',
    zIndex: 5,
    color: InterfaceMD3.color.onSurfaceVariant,
    cursor: 'text',

    opacity: 0,
    transition: 'opacity 0.1s',

    '&_activated': {
      opacity: 1,
    },
  },

  /** DISABLED */
  '&.text-field_disabled': {
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

    // Outline
    border: `1px solid ${hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.12')} !important`,

    // Input wrapper
    '& .input-wrapper': {
      cursor: 'default',
    },

    // Input text
    '& .input': {
      color: hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38'),
      cursor: 'default',
    },

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
    // Label text
    '& .label-text': {
      color: InterfaceMD3.color.onSurface,

      '&_focused': {
        color: InterfaceMD3.color.primary,
      },
    },

    // Outline
    border: `1px solid ${InterfaceMD3.color.onSurface}`,
  },

  /** FOCUSED */
  '&.text-field_focused': {
    marginLeft: '-1px',
    marginRight: '-1px',

    // Outline
    border: `2px solid ${InterfaceMD3.color.primary}`,

    // Content before input
    '& .content-before-input': {
      marginTop: '-1px',
    },
  },

  /** ERROR */
  '&.text-field_error': {
    // Outline
    borderColor: InterfaceMD3.color.error,

    // Label text
    '& .label-text': {
      color: InterfaceMD3.color.error,
    },

    // Trailing icon
    '& .trailing-icon': {
      color: InterfaceMD3.color.error,
    },

    // Input
    '& input': {
      // Caret
      caretColor: InterfaceMD3.color.error,
    },

    '&:hover': {
      // Outline
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

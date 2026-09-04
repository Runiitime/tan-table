import { SxProps } from '@mui/system';

import { InterfaceMD3 } from "@assets/md3";

export const TextField: SxProps = {
  // Get rid of default browser white background-color of input
  'input:-webkit-autofill, input:-webkit-autofill:focus': {
    transition: 'background-color 0s 600000s, color 0s 600000s !important',
  },
  '&.custom-text-field': {
    '&.text-field-wrapper': {
      maxWidth: '336px',

      '&_multiline': {
        maxWidth: '100%',
      },
    },

    '& .text-field': {
      border: `2px solid`,
      borderColor: 'transparent',
      borderRadius: InterfaceMD3.shape.corner.extraSmall,

      '&_disabled': {
        background: 'none',
        border: '2px solid transparent !important',
      },

      '&:hover': {
        borderColor: InterfaceMD3.color.primary,
      },

      '&_focused': {
        borderColor: InterfaceMD3.color.primary,

        '& .prefix': {
          marginBottom: '0',
        },

        '& .input-wrapper': {
          paddingBottom: '8px',
        },
      },
    },

    '& .state-layer': {
      display: 'none',
    },

    '& .leading-icon': {
      marginBottom: '0 !important',
    },

    '& .end-controls': {
      marginBottom: '0 !important',
    },

    '&_without-label': {
      '& .input-wrapper': {
        padding: '8px 16px',
        paddingTop: '8px !important',
      },

      '& .prefix, .suffix': {
        padding: '0 4px 0 16px',
        alignItems: 'center',
        opacity: 1,
      },

      '& textarea': {
        '&::placeholder': {
          opacity: 1,
        },
      },
    },
  },
};

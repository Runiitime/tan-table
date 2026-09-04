import { SxProps } from '@mui/system';

import { InterfaceMD3 } from "@assets/md3";
import { hexToRGBAStyle } from "@helpers/color";

export const TextField: SxProps = {
  '& .text-field': {
    cursor: 'text',

    '&_readonly': {
      cursor: 'initial',
    },

    '&_multiline': {
      height: 'auto',
      minHeight: '56px',

      '& .input-wrapper': {
        paddingTop: '20px !important',
      },

      '& .prefix, .suffix': {
        minHeight: '52px',
      },

      '& textarea': {
        resize: 'none',
      },
    },
  },

  '& .supporting-text': {
    color: InterfaceMD3.color.onSurfaceVariant,
    padding: '4px 16px 0 16px',
  },

  '& .input-with-content': {
    width: '100%',
  },

  '&.text-field-wrapper': {
    position: 'relative',

    '&_disabled': {
      '& .supporting-text': {
        color: `${hexToRGBAStyle(InterfaceMD3.color.onSurface, '0.38')} !important`,
      },
    },

    '&_error': {
      '& .supporting-text': {
        color: InterfaceMD3.color.error,
      },
    },
  },
};

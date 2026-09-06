import React from 'react';
import { CircularProgress, Fade } from '@mui/material';
import { SxProps } from '@mui/system';
import merge from 'lodash/merge';

import { Box } from "src/views/components/box";
import * as Styled from './style';

interface Props {
  visible: boolean;
  transitionVariant?: 'standard' | 'none';
  className?: string;
  sx?: SxProps;
}

export const Loader: React.FC<Props> = React.memo((props: Props): React.ReactElement => {
  const { visible, transitionVariant = 'standard', className, sx } = props;

  /** CONST */
  const transitionTimeout = transitionVariant === 'standard' ? 777 : 0;
  const loaderWrapperSx = React.useMemo(() => merge({}, Styled.LoaderWrapper, sx), [sx]);

  /** RENDER */
  return (
    <Fade
      in={visible}
      unmountOnExit
      style={{
        transitionDelay: visible ? `${transitionTimeout}ms` : `0ms`,
      }}
    >
      <Box sx={loaderWrapperSx} className={className}>
        <CircularProgress />
      </Box>
    </Fade>
  );
});

import React from 'react';
import MUIFab from '@mui/material/Fab';
import { SxProps } from '@mui/system';
import classnames from 'classnames';

import * as Styled from './style';
import { IMap } from "@data/structures";
import { Box } from "@components/box";

interface Props {
  color?: 'primary' | 'secondary' | 'surface' | 'tertiary' | 'branded';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const mainClass = 'fab';

export const Fab: React.FC<React.PropsWithChildren<Props>> = React.memo(
  (props: React.PropsWithChildren<Props>): React.ReactElement => {
    const { color = 'primary', size = 'medium', className, children, onClick } = props;

    /** CONST */
    const classes = classnames({
      [mainClass]: true,
      [className]: className,
    });

    const mapStyled: IMap<SxProps> = {
      primary: Styled.Primary,
      secondary: Styled.Secondary,
      surface: Styled.Surface,
      tertiary: Styled.Tertiary,
      branded: Styled.Branded,
    };

    const sxFab: SxProps = mapStyled?.[color] ?? Styled.Primary;

    /** RENDER */
    return (
      <MUIFab sx={sxFab} className={classes} size={size} onClick={onClick}>
        {children}
        <Box className={'state-layer'} />
      </MUIFab>
    );
  },
);

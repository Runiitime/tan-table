import React from 'react';
import { SxProps } from '@mui/system';
import merge from 'lodash/merge';

import { Box } from "src/views/components/box";
import { Typography } from "@components/typography";
import { IMap } from "@data/structures";

import * as Styled from './style';

type Props = React.PropsWithChildren<{
  supportingText?: string;
  type?: 'plain' | 'rich';
  subhead?: string;
  actions?: React.ReactNode;
  sx?: SxProps;
}>;

const mainClass = 'tooltip';
const subheadClass = `${mainClass}__subhead`;
const supportingTextClass = `${mainClass}__supporting-text`;
const actionsClass = `${mainClass}__actions`;

export const Tooltip: React.FC<Props> = React.memo((props: Props): React.ReactElement => {
  const { supportingText, type = 'plain', subhead, actions, sx, children } = props;

  /** CONST */
  const showTooltip = type === 'rich' || (type === 'plain' && supportingText);
  const showSubhead = type === 'rich' && subhead;
  const supportingTextSize = type === 'plain' ? 'small' : 'medium';
  const showActions = type === 'rich' && actions;

  /** MEMO */
  const sxTooltip = React.useMemo((): SxProps => {
    const mapStyle: IMap<SxProps> = {
      plain: Styled.Plain,
      rich: Styled.Rich,
    };

    const innerSx = mapStyle?.[type] ?? Styled.Plain;

    return merge({}, innerSx, sx);
  }, [sx, type]);

  const tooltipComponent = showTooltip ? (
    <Box sx={sxTooltip} className={mainClass}>
      {showSubhead && (
        <Typography className={subheadClass} variant='title' size='small'>
          {subhead}
        </Typography>
      )}
      <Typography className={supportingTextClass} variant='body' size={supportingTextSize}>
        {supportingText}
      </Typography>
      {showActions && <Box className={actionsClass}>{actions}</Box>}
    </Box>
  ) : null;

  /** RENDER */
  if (children) {
    return (
      <Popper trigger={'hover'} anchor={children} placement={'bottom'}>
        {tooltipComponent}
      </Popper>
    );
  }

  return tooltipComponent;
});

Tooltip.displayName = 'Tooltip';

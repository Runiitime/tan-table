import React from 'react';
import { Popper as MUIPopper } from '@mui/material';
import { ClickAwayListener } from '@mui/material';
import { Instance } from '@popperjs/core';

import { Box } from "src/views/components/box";
import { defined } from "@helpers/defined";
import * as styled from './style';

type Props = React.PropsWithChildren<{
  anchor: React.ReactNode;
  placement?: 'bottom-end' | 'bottom';
  trigger?: 'click' | 'hover';
  open?: boolean;
  widthAsChildren?: boolean;
  disabled?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}>;

export const Popper: React.FC<Props> = React.memo((props: Props) => {
  const {
    anchor,
    children,
    placement = 'bottom-end',
    trigger = 'click',
    open: openFromProps,
    disabled,
    widthAsChildren,
    onOpen,
    onClose,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [width, setWidth] = React.useState(null);
  const [popperInstance, setPopperInstance] = React.useState<Instance>(null);

  const anchorRef = React.useRef<HTMLElement>(null);

  // Флаг открытия поппера. Если передан open через props, значит компонент контроллируемый
  const openPopper = openFromProps ?? open;

  React.useLayoutEffect(() => {
    if (widthAsChildren && !width && anchorRef?.current) {
      return setWidth(anchorRef?.current?.clientWidth);
    }

    if (!widthAsChildren && width) {
      setWidth(null);
    }
  }, [widthAsChildren, width, anchorRef?.current]);

  const onClickAnchor = React.useCallback(() => {
    if (trigger !== 'click') {
      return;
    }

    // Обработка контроллируемого компонента
    if (defined(openFromProps)) {
      openFromProps ? onClose?.() : onOpen?.();
      return;
    }

    // Обработка для неконтроллирумого компонента
    const newOpen = !open;
    setOpen(newOpen);
    newOpen ? onOpen?.() : onClose?.();
  }, [trigger, open, openFromProps, onOpen, onClose]);

  const handleClickAway = React.useCallback(() => {
    // Если компонент неконтроллируемый, то принудительно меняем внутреннее состояние open на false.
    if (!defined(openFromProps)) {
      setOpen(false);
    }
    onClose?.();
  }, [openFromProps, onClose]);

  const onMouseEnterAnchor = React.useCallback(() => {
    if (trigger !== 'hover') {
      return;
    }

    // Обработка контроллируемого компонента
    if (openFromProps === false) {
      onOpen?.();
      return;
    }

    setOpen(true);
    onOpen?.();
  }, [trigger, onOpen]);

  const onMouseLeaveAnchor = React.useCallback(() => {
    if (trigger !== 'hover') {
      return;
    }

    // Обработка контроллируемого компонента
    if (openFromProps === true) {
      onClose?.();
      return;
    }

    setOpen(false);
    onClose?.();
  }, [trigger, onClose]);

  const mainSx = React.useMemo(() => styled.Popper(width), [width]);
  const anchorSx = React.useMemo(() => styled.Anchor(disabled), [disabled]);

  const margin = React.useMemo(() => {
    if (!anchorRef?.current) {
      return 0;
    }

    const supportingText = anchorRef?.current?.getElementsByClassName?.('supporting-text');
    if (supportingText?.length === 0 || !popperInstance?.state || popperInstance?.state?.placement?.includes?.('top')) {
      return 0;
    }

    return -supportingText?.[0].clientHeight;
  }, [anchorRef?.current, popperInstance]);

  const modifiers = React.useMemo(
    () => [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, margin], // [Отступ сбоку, Отступ сверху]
        },
      },
    ],
    [margin],
  );

  // Если не функцией, то тогда рефа = null
  const popperRef = React.useCallback((instance: Instance) => {
    if (instance?.state) {
      setPopperInstance(instance);
    }
  }, []);

  /** RENDER */
  return (
    <>
      <Box
        ref={anchorRef}
        sx={anchorSx}
        className={'popper-anchor'}
        onClick={onClickAnchor}
        onMouseEnter={onMouseEnterAnchor}
        onMouseLeave={onMouseLeaveAnchor}
      >
        {anchor}
      </Box>

      <MUIPopper
        popperRef={popperRef}
        anchorEl={anchorRef?.current}
        open={openPopper}
        placement={placement}
        sx={mainSx}
        modifiers={modifiers}
        onMouseEnter={onMouseEnterAnchor}
        onMouseLeave={onMouseLeaveAnchor}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box>{children}</Box>
        </ClickAwayListener>
      </MUIPopper>
    </>
  );
});

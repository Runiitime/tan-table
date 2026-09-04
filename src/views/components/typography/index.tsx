import React, { PropsWithChildren } from 'react';
import { SxProps } from '@mui/system';

import { Box } from "@components/box"
import { Tooltip } from "@components/tooltip"
import { IMap } from "@data/structures";
import { elementOverflowed } from "@helpers/dom";

import * as Styled from './style';

export type TypographyVariant = 'display' | 'headline' | 'title' | 'body' | 'label';
export type TypographySize = 'large' | 'medium' | 'small';

interface Props {
  variant: TypographyVariant;
  size: TypographySize;
  sx?: SxProps;
  className?: string;
  tooltipAfterOverflowed?: boolean;
  monospaced?: boolean;
  title?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  onDoubleClick?: () => void;
}

export const Typography: React.FC<PropsWithChildren<Props>> = React.memo(
  (props: PropsWithChildren<Props>): React.ReactElement => {
    const {
      variant,
      size,
      sx,
      className,
      tooltipAfterOverflowed,
      monospaced,
      title,
      children,
      onClick,
      onDoubleClick,
    } = props;

    const ref = React.useRef(null);

    /** STATE */
    const [overflowed, setOverflowed] = React.useState<boolean>(false);

    /** EFFECTS */
    React.useEffect(() => {
      if (!ref?.current || !tooltipAfterOverflowed) {
        setOverflowed(false);
        return;
      }
      setOverflowed(elementOverflowed(ref));
    }, [ref, tooltipAfterOverflowed, children]);

    React.useEffect(() => {
      if (!tooltipAfterOverflowed) {
        return;
      }

      const onResize = () => setOverflowed(elementOverflowed(ref));
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }, [ref, tooltipAfterOverflowed]);

    /** MEMO */
    const sxComponent: SxProps = React.useMemo((): SxProps => {
      const fontStyleMap: IMap<SxProps> = {
        display: Styled.Display,
        headline: Styled.Headline,
        title: Styled.Title,
        body: Styled.Body,
        label: Styled.Label,
      };

      const fontStyle: IMap<SxProps> = fontStyleMap?.[variant] as IMap<SxProps>;

      const sizeStyleMap: IMap<SxProps> = {
        large: fontStyle?.['large'],
        medium: fontStyle?.['medium'],
        small: fontStyle?.['small'],
      };

      const monospacedStyle: SxProps = monospaced && Styled.Monospaced;

      return Object.assign({}, sizeStyleMap?.[size], Styled.Common, monospacedStyle, sx);
    }, [variant, size, monospaced, sx]);

    /** RENDER */
    if (overflowed && typeof children === 'string') {
      return (
        <Tooltip supportingText={children}>
          <Box sx={sxComponent} className={className} ref={ref} onClick={onClick} onDoubleClick={onDoubleClick}>
            {children}
          </Box>
        </Tooltip>
      );
    }

    return (
      <Box
        sx={sxComponent}
        className={className}
        ref={ref}
        title={title}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      >
        {children}
      </Box>
    );
  },
);

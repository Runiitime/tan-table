import React from 'react';
import { SxProps } from '@mui/system';
import classnames from 'classnames';

import { Box } from "@components/box";
import { TextField as TextFieldMD3 } from "@components/textfieldMD3"
import { Typography } from "@components/typography";
import * as Styled from './style';

interface TextFieldProps extends Omit<React.ComponentProps<typeof TextFieldMD3>, 'type'> {
  /**
   * The 'viewMode' property turns the Text-Field into a label and value component.
   **/
  viewMode?: boolean;

  /**
   * The 'monospaced' property only applies when using 'viewMode'.
   **/
  monospaced?: boolean;

  /**
   * Use validator if you need to validate the entered value.
   * */
  validator?: (value: string) => boolean;
}

const mainClass = 'custom-text-field';
const viewModeContent = `${mainClass}__view-content`;

export const TextField = React.memo(
  React.forwardRef((props: TextFieldProps, ref: React.ForwardedRef<HTMLDivElement>): React.ReactElement => {
    const {
      value,
      label,
      prefix,
      suffix,
      supportingText,
      sx,
      className,
      viewMode,
      monospaced,
      validator,
      onChange: onChangeFromProps,
    } = props;

    /** CONST */
    const classes = classnames({
      [mainClass]: true,
      [`${mainClass}_without-label`]: !label,
      [`${mainClass}_view-mode`]: viewMode,
      [className]: className,
    });

    /** CALLBACK */
    const onChange = React.useCallback(
      (value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (validator && value && !validator(value)) {
          return;
        }

        onChangeFromProps?.(value, event);
      },
      [validator, onChangeFromProps],
    );

    /** MEMO */
    const sxTextField = React.useMemo((): SxProps => {
      const style: SxProps = viewMode ? Styled.ViewMode : Styled.TextField;
      return Object.assign({}, style, sx);
    }, [viewMode, sx]);

    /** RENDER */
    if (viewMode) {
      return (
        <Box sx={sxTextField} className={classes}>
          <Typography variant='body' size='small'>
            {label}
          </Typography>
          <Box className={viewModeContent}>
            {prefix && (
              <Typography variant='display' size='small' monospaced={monospaced}>
                {prefix}
              </Typography>
            )}
            <Typography variant='display' size='small' monospaced={monospaced}>
              {value}
            </Typography>
            {suffix && (
              <Typography variant='display' size='small' monospaced={monospaced}>
                {suffix}
              </Typography>
            )}
          </Box>
          {supportingText && (
            <Typography variant='body' size='small'>
              {supportingText}
            </Typography>
          )}
        </Box>
      );
    }

    return <TextFieldMD3 {...props} ref={ref} type='filled' sx={sxTextField} className={classes} onChange={onChange} />;
  }),
);

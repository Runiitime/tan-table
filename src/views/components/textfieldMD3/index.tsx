import React from 'react';
import { SxProps } from '@mui/system';
import classnames from 'classnames';
import mergeRefs from 'merge-refs';
import { Key } from 'ts-key-enum';

import { IMap } from "@data/structures";
import { Box } from "@components/box";
import { Typography } from "@components/typography";
import { defined } from "@helpers/defined";

import * as Styled from './style';

interface TextFieldProps {
  type?: 'filled' | 'outlined';
  value?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  prefix?: string;
  suffix?: string;
  supportingText?: string;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  disabled?: boolean;
  readonly?: boolean;
  autoFocus?: boolean;
  autoSelectOnFocus?: boolean;
  /**
   * If true, a textarea element is rendered instead of an input.
   * */
  multiline?: boolean;
  /**
   * Number of rows to display when multiline option is set to true.
   * */
  rows?: number;
  isPassword?: boolean;
  error?: boolean;
  inputRef?: React.MutableRefObject<any>;
  /**
   * Allows you to change the appearance of the keyboard on a phone or tablet.
   * Possible values: none, text, numeric, decimal, tel, search, email, url
   * */
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  sx?: SxProps;
  className?: string;
  /**
   * Use the 'contentBeforeInput' property only in the rarest and most necessary cases.
   * The property was needed to create the Chips-Field component.
   * */
  contentBeforeInput?: React.ReactNode;
  onClick?: () => void;
  onClickTrailingIcon?: () => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPaste?: (value: string, event: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyUp?: (key: Key, event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (key: Key, event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const mainClass = 'text-field-wrapper';
const textFieldClass = 'text-field';
const stateLayerClass = 'state-layer';
const leadingIconClass = 'leading-icon';
const inputWrapperClass = 'input-wrapper';
const labelClass = 'label-text';
const inputWithBeforeContentClass = 'input-with-content';
const contentBeforeInputClass = 'content-before-input';
const inputClass = 'input';
const endControlsClass = 'end-controls';
const prefixClass = 'prefix';
const suffixClass = 'suffix';
const trailingIconClass = 'trailing-icon';
const supportingTextClass = 'supporting-text';

const initialTextareaHeight = 24;

export const TextField = React.memo(
  React.forwardRef((props: TextFieldProps, ref: React.ForwardedRef<HTMLDivElement>): React.ReactElement => {
    const {
      type = 'filled',
      value = '',
      label,
      placeholder,
      name,
      prefix,
      suffix,
      supportingText,
      leadingIcon,
      trailingIcon,
      disabled,
      readonly,
      autoFocus,
      autoSelectOnFocus,
      multiline,
      rows,
      inputRef: refFromProps,
      inputMode = 'text',
      isPassword,
      error,
      sx,
      className,
      contentBeforeInput,
      onClick,
      onClickTrailingIcon,
      onFocus,
      onBlur,
      onPaste,
      onKeyUp,
      onKeyDown,
      onChange,
    } = props;

    /** REF */
    const textFieldRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    const combinedRef = mergeRefs(inputRef, refFromProps);

    /** STATE */
    const [focus, setFocus] = React.useState<boolean>(!!autoFocus);
    const [initialSelectedValue, setInitialSelectedValue] = React.useState<boolean>(false);
    const [textareaHeight, setTextareaHeight] = React.useState<number>(0);

    /** EFFECTS */
    React.useEffect(() => {
      if (!inputRef?.current || !value || !autoFocus || !autoSelectOnFocus || initialSelectedValue) {
        return;
      }

      setInitialSelectedValue(true);
      inputRef?.current?.setSelectionRange(0, value?.length);
    }, [inputRef, value, autoFocus, autoSelectOnFocus, initialSelectedValue]);

    React.useEffect(() => {
      if (!multiline) {
        return;
      }

      if (defined(rows) && rows > 0) {
        setTextareaHeight(initialTextareaHeight * rows);
        return;
      }

      const textarea = inputRef?.current;
      if (!textarea || !value) {
        setTextareaHeight(initialTextareaHeight);
        return;
      }

      setTextareaHeight(textarea?.scrollHeight);
    }, [multiline, value, rows, inputRef]);

    React.useEffect(() => {
      document.addEventListener('mousedown', onClickOutsideTextField);
      return () => {
        document.removeEventListener('mousedown', onClickOutsideTextField);
      };
    });

    /** CONST */
    const labelSize: 'small' | 'large' = focus || value ? 'small' : 'large';

    const inputType = isPassword ? 'password' : 'text';

    const mainClasses = classnames({
      [mainClass]: true,
      [`${mainClass}_disabled`]: disabled,
      [`${mainClass}_multiline`]: multiline,
      [`${mainClass}_error`]: error,
      [className]: className,
    });

    const textFieldClasses = classnames({
      [textFieldClass]: true,
      [`${textFieldClass}_disabled`]: disabled,
      [`${textFieldClass}_readonly`]: readonly,
      [`${textFieldClass}_multiline`]: multiline,
      [`${textFieldClass}_focused`]: focus,
      [`${textFieldClass}_error`]: error,
    });

    const inputWrapperClasses = classnames({
      [inputWrapperClass]: true,
      [`${inputWrapperClass}_with-prefix`]: prefix,
      [`${inputWrapperClass}_with-suffix`]: suffix,
    });

    const labelClasses = classnames({
      [labelClass]: true,
      [`${labelClass}_focused`]: focus,
      [`${labelClass}_with-input-value`]: value,
      [`${labelClass}_with-prefix`]: prefix,
      [`${labelClass}_with-leading-icon`]: leadingIcon,
    });

    const inputClasses = classnames({
      [inputClass]: true,
      [`${inputClass}_focused`]: focus,
      [`${inputClass}_with-prefix`]: !!prefix,
      [`${inputClass}_placeholder-visible`]: !label && placeholder,
    });

    const prefixClasses = classnames({
      [prefixClass]: true,
      [`${prefixClass}_activated`]: focus || value,
    });

    const suffixClasses = classnames({
      [suffixClass]: true,
      [`${suffixClass}_activated`]: focus || value,
    });

    /** CALLBACKS */
    const onClickOutsideTextField = React.useCallback(
      (event: MouseEvent) => {
        if (!focus) {
          return;
        }

        if (textFieldRef?.current && !textFieldRef?.current?.contains(event.target as Node)) {
          setFocus(false);
          textFieldRef?.current?.blur();
        }
      },
      [textFieldRef, focus],
    );

    const onClickTextField = React.useCallback(() => {
      if (!inputRef?.current || disabled) {
        return;
      }

      onClick?.();

      if (!focus) {
        setFocus(true);
      }

      inputRef?.current?.focus();
    }, [inputRef, focus, disabled, onClick]);

    const handlerFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!inputRef?.current || focus) {
          return;
        }

        setFocus(true);
        onFocus?.(event);

        const startSelectionRange = autoSelectOnFocus ? 0 : value?.length;
        inputRef?.current?.setSelectionRange(startSelectionRange, value?.length);
      },
      [inputRef, focus, value, autoSelectOnFocus, onFocus],
    );

    const handlerBlur = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (focus) {
          setFocus(false);
          return;
        }

        onBlur?.(event);
      },
      [focus, onBlur],
    );

    const handlerPaste = React.useCallback(
      (event: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value: string = event?.clipboardData?.getData('text/plain')?.trim();

        onPaste?.(value, event);
      },
      [onPaste],
    );

    const onChangeInput = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (multiline) {
          event.target.style.height = initialTextareaHeight + 'px';
          event.target.style.height = `${event.target.scrollHeight}px`;

          if (defined(rows) && rows > 0) {
            event.target.style.height = `${initialTextareaHeight * rows}px`;
          }
        }

        const value: string = event?.target?.value;
        onChange?.(value, event);
      },
      [multiline, rows, onChange],
    );

    const handlerKeyUp = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const key = event?.key as Key;
        onKeyUp?.(key, event);
      },
      [onKeyUp],
    );

    const handlerKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const key = event?.key as Key;
        onKeyDown?.(key, event);
      },
      [onKeyDown],
    );

    const onTrailingIcon = React.useCallback(() => {
      if (disabled) {
        return;
      }

      onClickTrailingIcon?.();
    }, [disabled, onClickTrailingIcon]);

    /** MEMO */
    const sxTextField = React.useMemo((): SxProps => Object.assign({}, Styled.TextField, sx), [sx]);

    const sxTextFieldVariant = React.useMemo((): SxProps => {
      const mapStyled: IMap<SxProps> = {
        filled: Styled.Filled,
        outlined: Styled.Outlined,
      };

      return (mapStyled?.[type] as SxProps) ?? Styled.Filled;
    }, [type]);

    const multilineStyle = React.useMemo((): React.CSSProperties => {
      if (!textareaHeight) {
        return;
      }

      return { height: `${textareaHeight}px` };
    }, [textareaHeight]);

    /** RENDER */
    return (
      <Box ref={ref} sx={sxTextField} className={mainClasses}>
        <Box ref={textFieldRef} sx={sxTextFieldVariant} className={textFieldClasses} onClick={onClickTextField}>
          <Box className={stateLayerClass} />
          {leadingIcon && <Box className={leadingIconClass}>{leadingIcon}</Box>}
          {prefix && (
            <Typography className={prefixClasses} variant='body' size='large'>
              {prefix}
            </Typography>
          )}
          <Box className={inputWrapperClasses}>
            {label && (
              <label className={labelClasses}>
                <Typography variant='body' size={labelSize}>
                  {label}
                </Typography>
              </label>
            )}
            <Box className={inputWithBeforeContentClass} style={multilineStyle}>
              {contentBeforeInput && <div className={contentBeforeInputClass}>{contentBeforeInput}</div>}
              {multiline ? (
                <textarea
                  ref={combinedRef}
                  name={name}
                  className={inputClasses}
                  style={multilineStyle}
                  value={value}
                  placeholder={placeholder}
                  disabled={disabled}
                  readOnly={readonly}
                  autoFocus={autoFocus}
                  onFocus={handlerFocus}
                  onBlur={handlerBlur}
                  onPaste={handlerPaste}
                  onKeyUp={handlerKeyUp}
                  onKeyDown={handlerKeyDown}
                  onChange={onChangeInput}
                />
              ) : (
                <input
                  ref={combinedRef}
                  type={inputType}
                  name={name}
                  className={inputClasses}
                  value={value}
                  placeholder={placeholder}
                  inputMode={inputMode}
                  disabled={disabled}
                  readOnly={readonly}
                  autoFocus={autoFocus}
                  spellCheck={false}
                  onFocus={handlerFocus}
                  onBlur={handlerBlur}
                  onPaste={handlerPaste}
                  onKeyUp={handlerKeyUp}
                  onKeyDown={handlerKeyDown}
                  onChange={onChangeInput}
                />
              )}
            </Box>
          </Box>
          <Box className={endControlsClass}>
            {suffix && (
              <Typography className={suffixClasses} variant='body' size='large'>
                {suffix}
              </Typography>
            )}
            {trailingIcon && (
              <Box className={trailingIconClass} onClick={onTrailingIcon}>
                {trailingIcon}
              </Box>
            )}
          </Box>
        </Box>
        {supportingText && (
          <Typography variant='body' size='small' className={supportingTextClass}>
            {supportingText}
          </Typography>
        )}
      </Box>
    );
  }),
);

import React from 'react';
import { type SxProps } from '@mui/system';
import classnames from 'classnames';
import { Box } from "src/views/components/box";
import * as Styled from "./style"

interface Props extends React.PropsWithChildren{
    className?: string;
    sx?: SxProps;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

const mainClass = 'card';
const stateLayerClass = `${mainClass}__state-layer`;
const contentClass = `${mainClass}__content`;

export const Card: React.FC<Props> = React.memo((props: Props): React.ReactElement => {
    const {
        className= "",
        sx,
        disabled,
        children,
        onClick
    } = props

    /** REFS **/
    const ref = React.useRef<HTMLElement>(null);

    /** STATE */
    const [pressed, setPressed] = React.useState<boolean>(false);

    /** CONST */
    const mainClasses = classnames({
        [mainClass]: true,
        [`${mainClass}_disabled`]: disabled,
        [`${mainClass}_pressed`]: pressed,
        [`${mainClass}_clickable`]: onClick,
        [className]: !!className,
    });

    /** CALLBACKS */
    const clickAvailable = React.useCallback(
        (event: React.MouseEvent<HTMLElement>): boolean => {
            if ((event?.target as Element)?.closest('button, .menu-wrapper')) {
                return false;
            }

            if ((event?.target as HTMLElement)?.onclick) {
                return false;
            }

            if (!ref?.current || !ref?.current?.contains(event?.target as Node)) {
                return false;
            }

            if (event.button !== 0) {
                return false;
            }

            return true;
        },
        [ref],
    );

    const onMouseDown = React.useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (!clickAvailable(event)) {
                return;
            }

            setPressed(true);
        },
        [clickAvailable],
    );

    const onMouseUp = React.useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (!clickAvailable(event)) {
                return;
            }

            setPressed(false);
            onClick?.(event);
        },
        [clickAvailable, onClick],
    );

    const onMouseLeave = React.useCallback(() => {
        if (!pressed) {
            return;
        }

        setPressed(false);
    }, [pressed]);

    /** MEMO */
    const sxCard = React.useMemo((): SxProps => {
        return Object.assign({}, Styled.Card, sx);
    }, [sx]);

    /** RENDER */
    return (
        <Box
            sx={sxCard}
            className={mainClasses}
            ref={ref}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
        >
            <Box className={stateLayerClass} />
            <Box className={contentClass}>{children}</Box>
        </Box>
    );
})
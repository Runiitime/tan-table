import { type SxProps } from '@mui/system';
import { InterfaceMD3 } from "@assets/md3";
import { hexToRGBAStyle } from "@helpers/color"

export const cardPadding = 16;

export const Card: SxProps = {
    padding: `${cardPadding}px`,
    borderRadius: InterfaceMD3.shape.corner.medium,
    position: 'relative',
    width: 'fit-content',
    overflow: 'hidden',

    /** ENABLED */
    '&.card': {
        // Container
        background: InterfaceMD3.color.surfaceContainerLow,
        boxShadow: InterfaceMD3.elevation.level1,

        // State layer
        '& .card__state-layer': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
        },

        // Content
        '& .card__content': {
            position: 'relative',
            zIndex: 5,
        },
    },

    /** HOVERED */
    '&.card_clickable:hover': {
        cursor: 'pointer',
        // Container
        boxShadow: InterfaceMD3.elevation.level2,

        // State layer
        '& .card__state-layer': {
            background: hexToRGBAStyle(InterfaceMD3.color.onSurface, InterfaceMD3.state.hover.stateLayerOpacity),
        },
    },

    /** DISABLED */
    '&.card_disabled': {
        // Container
        background: InterfaceMD3.color.surface,
        opacity: '0.38',
        pointerEvents: 'none',
    },

    /** PRESSED */
    '&.card_clickable.card_pressed': {
        cursor: 'pointer',
        // Container
        boxShadow: InterfaceMD3.elevation.level1,

        // State layer
        '& .card__state-layer': {
            background: hexToRGBAStyle(InterfaceMD3.color.onSurface, InterfaceMD3.state.press.stateLayerOpacity),
        },
    },
};

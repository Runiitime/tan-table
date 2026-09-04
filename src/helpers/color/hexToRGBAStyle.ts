import { hexToRgb } from "./hexToRgb";

export const hexToRGBAStyle = (hex: string, alpha: string): string => {
    const color = hexToRgb(hex);
    const alphaNumber = Number(alpha);

    return `rgba(${color?.r}, ${color?.g}, ${color?.b}, ${alphaNumber})`;
};

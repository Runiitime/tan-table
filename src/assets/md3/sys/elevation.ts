import { hexToRgb } from "@helpers/color";
import { color } from "./color";

const colorShadowToRGB = hexToRgb(color.shadow);
const shadow1Color = `${colorShadowToRGB?.r}, ${colorShadowToRGB?.g}, ${colorShadowToRGB?.b}, 0.2`;
const shadow2Color = `${colorShadowToRGB?.r}, ${colorShadowToRGB?.g}, ${colorShadowToRGB?.b}, 0.14`;
const shadow3Color = `${colorShadowToRGB?.r}, ${colorShadowToRGB?.g}, ${colorShadowToRGB?.b}, 0.12`;

export const elevation = {
    level5: `rgba(${shadow1Color}) 0px 7px 8px -4px, rgba(${shadow2Color}) 0px 12px 17px 2px, rgba(${shadow3Color}) 0px 5px 22px 4px`,
    level4: `rgba(${shadow1Color}) 0px 5px 5px -3px, rgba(${shadow2Color}) 0px 8px 10px 1px, rgba(${shadow3Color}) 0px 3px 14px 2px`,
    level3: `rgba(${shadow1Color}) 0px 3px 5px -1px, rgba(${shadow2Color}) 0px 6px 10px 0px, rgba(${shadow3Color}) 0px 1px 18px 0px`,
    level2: `rgba(${shadow1Color}) 0px 3px 5px -1px, rgba(${shadow2Color}) 0px 6px 10px 0px, rgba(${shadow3Color}) 0px 1px 18px 0px`,
    level1: `rgba(${shadow1Color}) 0px 2px 1px -1px, rgba(${shadow2Color}) 0px 1px 1px 0px, rgba(${shadow3Color}) 0px 1px 3px 0px`,
    level0: `rgba(${shadow1Color}) 0px 0px 0px 0px, rgba(${shadow2Color}) 0px 0px 0px 0px, rgba(${shadow3Color}) 0px 0px 0px 0px`,
};

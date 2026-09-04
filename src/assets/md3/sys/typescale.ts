const typeface = {
  brand: 'Roboto',
  plain: 'Roboto',

  weightRegular: 400,
  weightMedium: 500,
};

export const typescale = {
  /** DISPLAY */
  display: {
    large: {
      font: typeface.plain,
      weight: typeface.weightRegular,
      size: '57px',
      lineHeight: '64px',
      tracking: '-0.25px',
    },
    medium: {
      font: typeface.brand,
      weight: typeface.weightRegular,
      size: '45px',
      lineHeight: '52px',
      tracking: 0,
    },
    small: {
      font: typeface.brand,
      weight: typeface.weightRegular,
      size: '36px',
      lineHeight: '44px',
      tracking: 0,
    },
  },

  /** HEADLINE */
  headline: {
    large: {
      font: typeface.brand,
      weight: typeface.weightRegular,
      size: '32px',
      lineHeight: '40px',
      tracking: 0,
    },
    medium: {
      font: typeface.brand,
      weight: typeface.weightRegular,
      size: '28px',
      lineHeight: '36px',
      tracking: 0,
    },
    small: {
      font: typeface.brand,
      weight: typeface.weightRegular,
      size: '24px',
      lineHeight: '32px',
      tracking: 0,
    },
  },

  /** TITLE */
  title: {
    large: {
      font: typeface.brand,
      weight: typeface.weightRegular,
      size: '22px',
      lineHeight: '28px',
      tracking: 0,
    },
    medium: {
      font: typeface.plain,
      weight: typeface.weightMedium,
      size: '16px',
      lineHeight: '24px',
      tracking: '0.15px',
    },
    small: {
      font: typeface.plain,
      weight: typeface.weightMedium,
      size: '14px',
      lineHeight: '20px',
      tracking: '0.1px',
    },
  },

  /** BODY */
  body: {
    large: {
      font: typeface.plain,
      weight: typeface.weightRegular,
      size: '16px',
      lineHeight: '24px',
      tracking: '0.5px',
    },
    medium: {
      font: typeface.plain,
      weight: typeface.weightRegular,
      size: '14px',
      lineHeight: '20px',
      tracking: '0.25px',
    },
    small: {
      font: typeface.plain,
      weight: typeface.weightRegular,
      size: '12px',
      lineHeight: '16px',
      tracking: '0.4px',
    },
  },

  /** LABEL */
  label: {
    large: {
      font: typeface.plain,
      weight: typeface.weightMedium,
      size: '14px',
      lineHeight: '20px',
      tracking: '0.1px',
    },
    medium: {
      font: typeface.plain,
      weight: typeface.weightMedium,
      size: '12px',
      lineHeight: '16px',
      tracking: '0.5px',
    },
    small: {
      font: typeface.plain,
      weight: typeface.weightMedium,
      size: '11px',
      lineHeight: '16px',
      tracking: '0.5px',
    },
  },
};

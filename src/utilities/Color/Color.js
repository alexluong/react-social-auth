import { color as COLORS } from 'config/theme';
import Validator from '../Validator';

class Color {
  static get(color = 'default') {
    if (COLORS[color]) {
      return COLORS[color];
    }

    if (
      Validator.isHexColor(color) ||
      Validator.isRGBAColor(color) ||
      Validator.isHSVColor(color)
    ) {
      return color;
    }

    console.error(`ERROR: ${color} is not a color name.`);
    return COLORS['default'];
  }

  static colorScheme(type = 'default') {
    switch (type) {
      case 'primary':
        return {
          text: COLORS['white'],
          border: COLORS['primary'],
          background: COLORS['primary'],
        };
      default:
        return {
          text: COLORS['white'],
          border: COLORS['black'],
          background: COLORS['black'],
        };
    }
  }
}

export default Color;

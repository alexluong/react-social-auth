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

  static getText(color = 'default') {
    if (['primary', 'secondary', 'default'].includes(color)) {
      return Color.get('white');
    }

    return Color.get('text');
  }
}

export default Color;

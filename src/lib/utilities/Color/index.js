import { color as COLORS } from 'config/theme';

class Color {
  color = '';

  constructor(color = 'default') {
    this.color = color;
  }

  exist() {
    return !(typeof COLORS[this.color] === 'undefined');
  }

  get() {
    const { color } = this;
    const returnColor = COLORS[color];
    if (!returnColor) {
      console.error(`ERROR: ${color} is not a color name.`);
      return COLORS['default'];
    }
    return COLORS[color];
  }
}

export { Color };

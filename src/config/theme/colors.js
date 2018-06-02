const COLORS = {
  text: '#000',
  background: '#fff',
  primary: 'teal',
  default: '#000',
};

const getColor = color => {
  const returnColor = COLORS[color];
  if (!returnColor) {
    console.error(`ERROR: ${color} is not a color name.`);
    return COLORS['default'];
  }
  return COLORS[color];
};

const isColor = color => {
  return !(COLORS[color] === undefined);
};

export default getColor;
export { isColor, COLORS };

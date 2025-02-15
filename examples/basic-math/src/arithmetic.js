export const add = (a, b) => {
  if (typeof a === 'string') a = Number(a);
  if (typeof b === 'string') b = Number(b);

  if (isNaN(b) || isNaN(a)) throw new Error("one of the params is not a number") 

  return a + b;
};

export const subtract = (a = 0, b = 0) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  if (b === 0) return null;
  return a / b;
};

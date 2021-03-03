/**
 * Checks if an input is a valid number.
 */
export const isNumber = (v) => {
  if (typeof v === "number") {
    return true;
  }

  return false;
};

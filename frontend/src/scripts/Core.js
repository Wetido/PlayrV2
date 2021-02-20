const isEmpty = function(value) {
  if (
    value === null ||
    value === "undefined" ||
    typeof value === "undefined" ||
    value.length === 0
  ) {
    return true;
  }
  return false;
};

export { isEmpty };

exports.addSubMult = function (operation_type, x, y) {
  const X = parseInt(x);
  const Y = parseInt(y);

  if (operation_type == "addition") {
    const z = X + Y;
    return z;
  } else if (operation_type == "subtraction") {
    const z = X - Y;
    return z;
  } else if (operation_type == "multiplication") {
    const z = X * Y;
    return z;
  }
};

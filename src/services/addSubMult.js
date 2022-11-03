exports.addSubMult = function (operation_type, x, y) {
  const X = x ? parseInt(x) : null;
  const Y = y ? parseInt(y) : null;
  

  if (X !== null && Y !== null){
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
  } else {
    return 'wrong input parameters'
  }
};

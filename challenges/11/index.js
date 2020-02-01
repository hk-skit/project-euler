const largestGridProduct = arr => {
  const { length: n } = arr;
  let product = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      // Right adjacent elements
      if (j < n - 3) {
        product = Math.max(
          product,
          arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3]
        );
      }
      // Left adjacent elements
      if (j >= 3) {
        product = Math.max(
          product,
          arr[i][j] * arr[i][j - 1] * arr[i][j - 2] * arr[i][j - 3]
        );
      }
      // Down adjacent element
      if (i < n - 3) {
        product = Math.max(
          product,
          arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j]
        );
      }
      // Up adjacent element
      if (i >= 3) {
        product = Math.max(
          product,
          arr[i][j] * arr[i - 1][j] * arr[i - 2][j] * arr[i - 3][j]
        );
      }

      // First diagonal
      if (i >= 2 && j >= 2 && i < n - 1 && j < n - 1) {
        product = Math.max(
          product,
          arr[i - 2][j - 2] * arr[i - 1][j - 1] * arr[i][j] * arr[i + 1][j + 1]
        );
      }

      // second diagonal
      if (i >= 2 && j < n - 2 && i < n - 1 && j > 0) {
        product = Math.max(
          product,
          arr[i + 1][j - 1] * arr[i][j] * arr[i - 1][j + 1] * arr[i - 2][j + 2]
        );
      }
    }
  }
  return product;
};

module.exports = largestGridProduct;

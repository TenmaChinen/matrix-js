class Matrix {
  rows = null;
  cols = null;

  constructor(matrix) {
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.mat = matrix;
    this.updateMinPad();
  }

  static Zeros(rows, cols) {
    const matrix = [];
    for (let row = 0; row < rows; row++) {
      matrix.push([...Array(cols).fill(0)])
    }
    return new Matrix(matrix);
  }

  shape() {
    return [this.rows, this.cols];
  }

  get(row = null, col = null) {
    row = (row == -1) ? this.rows - 1 : row;
    col = (col == -1) ? this.cols - 1 : col;
    if (col != null) {
      if (row != null) return this.mat[row][col];
      else {
        const column = [];
        for (let row = 0; row < this.rows; row++) {
          column.push([this.mat[row][col]]);
        }
        return new Matrix(column);
      }
    } else {
      if (row != null) return new Matrix([this.mat[row]]);
      else return new Matrix(this.mat);
    }
  }

  max() {
    let maxValue = -Infinity;
    let currValue;
    for (let row = 0; row < this.rows; row++) {
      currValue = Math.max(...this.mat[row]);
      if (currValue > maxValue) {
        maxValue = currValue;
      }
    }
    return maxValue;
  }

  min() {
    let minValue = Infinity;
    let currValue;
    for (let row = 0; row < this.rows; row++) {
      currValue = Math.min(...this.mat[row]);
      if (currValue < minValue) {
        minValue = currValue;
      }
    }
    return minValue;
  }

  round(dec = 1) {
    const OP = 10 ** dec;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = Math.round(this.mat[row][col] * OP) / OP;
      }
    }
    newMatrix.updateMinPad();
    return newMatrix;
  }

  updateMinPad() {
    const flatMatrix = this.mat.reduce((acc, x) => acc.concat(x), []);
    const idxLength = flatMatrix.map((x, idx) => [String(x).length, idx]);
    idxLength.sort();
    this.minPad = idxLength.at(-1)[0];
  }

  print() {
    this.updateMinPad();
    let result = "";
    const addPad = (x) => String(x).padStart(this.minPad, " ");
    for (let row = 0; row < this.rows; row++) {
      result += `[ ${this.mat[row].map(addPad).join(" , ")} ]\n`;
    }
    console.log(result);
  }

  addValue(value) {
    if (typeof (value) !== "number") return null;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = this.mat[row][col] + value;
      }
    }
    return newMatrix;
  }

  add(matrix) {
    if (typeof (matrix) === "number") return this.addValue(matrix);

    if (!matrix instanceof Matrix) return null;

    if (this.eqRows(matrix) && this.eqCols(matrix)) {
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < matrix.cols; col++) {
          newMatrix.mat[row][col] = this.mat[row][col] + matrix.mat[row][col];
        }
      }
    } else if (this.eqRows(matrix) && (matrix.cols === 1)) {

      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < matrix.cols; col++) {
          newMatrix.mat[row][col] = this.mat[row][col] + matrix.mat[row][0];
        }
      }
    } else if (this.eqCols(matrix) && (matrix.rows === 1)) {
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < matrix.cols; col++) {
          newMatrix.mat[row][col] = this.mat[row][col] + matrix.mat[0][col];
        }
      }
    } else {
      return null;
    }
    return newMatrix;
  }

  multiplyValue(value) {
    if (typeof (value) !== "number") return null;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = this.mat[row][col] * value;
      }
    }
    return newMatrix;
  }

  multiply(matrix) {

    const newMatrix = Matrix.Zeros(this.rows, matrix.cols);
    if (typeof (matrix) === "number") return this.multiplyValue(matrix);

    if (!matrix instanceof Matrix) return null;

    if (this.eqRows(matrix) && this.eqCols(matrix)) {
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < matrix.cols; col++) {
          newMatrix.mat[row][col] = this.mat[row][col] * matrix.mat[row][col];
        }
      }
    } else if (this.eqRows(matrix) && (matrix.cols === 1)) {

      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < matrix.cols; col++) {
          newMatrix.mat[row][col] = this.mat[row][col] * matrix.mat[row][0];
        }
      }
    } else if (this.eqCols(matrix) && (matrix.rows === 1)) {
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < matrix.cols; col++) {
          newMatrix.mat[row][col] = this.mat[row][col] * matrix.mat[0][col];
        }
      }
    } else {
      return null;
    }

    return newMatrix;
  }

  dot(matrix) {
    if (this.cols !== matrix.rows) return null;
    const REPS = this.cols;
    let value;
    const newMatrix = Matrix.Zeros(this.rows, matrix.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < matrix.cols; col++) {
        value = 0;
        for (let rep = 0; rep < REPS; rep++) {
          value += this.mat[row][rep] * matrix.mat[rep][col];
        }
        newMatrix.mat[row][col] = value;
      }
    }
    return newMatrix;
  }

  eqRows(matrix) {
    return this.rows === matrix.rows;
  }

  eqCols(matrix) {
    return this.cols === matrix.cols;
  }
}
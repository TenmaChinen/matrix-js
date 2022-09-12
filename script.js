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

  shape(){
    return [this.rows,this.cols];
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

  round(dec=1){
    const OP = 10 ** dec;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = Math.round(this.mat[row][col]*OP)/OP;
      }
    }
    newMatrix.updateMinPad();
    return newMatrix;
  }

  updateMinPad() {
    const flatMatrix = this.mat.reduce( (acc,x) => acc.concat(x), [] );
    const idxLength = flatMatrix.map( (x,idx) => [idx, String(x).length]);
    idxLength.sort();
    this.minPad = idxLength.at(-1)[1];
  }

  print() {
    let result = "";
    const addPad = (x) => String(x).padStart(this.minPad, " ");
    for (let row = 0; row < this.rows; row++) {
      result += `[ ${this.mat[row].map(addPad).join(" , ")} ]\n`;
    }
    console.log(result);
  }

  addValue(num) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.mat[row][col] += num;
      }
    }
    return this;
  }

  add(matrix) {
    if (this.cols !== matrix.cols) return null;
    if (matrix.rows === 1){
      const repMat = [];
      for(let idx=0; idx < this.rows; idx++) repMat.push([...matrix.mat[0]]);
      matrix = new Matrix(repMat);
    }
    const newMatrix = Matrix.Zeros(this.rows, matrix.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < matrix.cols; col++) {
        newMatrix.mat[row][col] = this.mat[row][col] + matrix.mat[row][col];
      }
    }
    newMatrix.updateMinPad();
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
    newMatrix.updateMinPad();
    return newMatrix;
  }
}

const matA = new Matrix([[0, 2, 3], [4, 5, 6]]);
const matB = new Matrix([[10, 2], [4, 5], [2, 1]]);
const matC = new Matrix([[4, 1, 2], [6, 3, 0]]);
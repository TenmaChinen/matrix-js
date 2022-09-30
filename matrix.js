class Matrix {
  rows = null;
  cols = null;

  constructor(matrix) {
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.mat = matrix;
  }

  static Zeros(rows, cols) {
    const matrix = [];
    for (let row = 0; row < rows; row++) {
      matrix.push([...Array(cols).fill(0)]);
    }
    return new Matrix(matrix);
  }

  shape() {
    return [this.rows, this.cols];
  }

  size() {
    return this.rows + this.cols;
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

  updateMinPad() {
    const flatMatrix = this.flatten();
    const idxLength = flatMatrix.mat[0].map((x, idx) => [String(x).length, idx]);
    idxLength.sort((x1, x2) => (x2[0] - x1[0]));
    this.minPad = idxLength[0][0];
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

  eqRows(matrix) {
    return this.rows === matrix.rows;
  }

  eqCols(matrix) {
    return this.cols === matrix.cols;
  }

  /* 
    ###############################################################
    @############   V A L U E   O P E R A T I O N S   #############
    ###############################################################
  */
  addValue(value) {
    if (typeof (value) !== "number") return null;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    let row, col;
    for (row = 0; row < this.rows; row++) {
      for (col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = this.mat[row][col] + value;
      }
    }
    return newMatrix;
  }

  subValue(value) {
    if (typeof (value) !== "number") return null;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    let row, col;
    for (row = 0; row < this.rows; row++) {
      for (col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = this.mat[row][col] - value;
      }
    }
    return newMatrix;
  }

  multiplyValue(value) {
    if (typeof (value) !== "number") return null;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    let row, col;
    for (row = 0; row < this.rows; row++) {
      for (col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = this.mat[row][col] * value;
      }
    }
    return newMatrix;
  }

  divideValue(value) {
    if (typeof (value) !== "number") return null;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    let row, col;
    for (row = 0; row < this.rows; row++) {
      for (col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = this.mat[row][col] / value;
      }
    }
    return newMatrix;
  }

  /* 
    ###############################################################
    ############   M A T R I X   O P E R A T I O N S   ############
    ###############################################################
  */

  add(matrix) {

    if (typeof (matrix) === "number") return this.addValue(matrix);
    if (!(matrix instanceof Matrix)) return null;

    const [matrixA, matrixB] = (this.size() >= matrix.size()) ? [this, matrix] : [matrix, this];
    const newMatrix = Matrix.Zeros(matrixA.rows, matrixA.cols);
    const newMat = newMatrix.mat;
    const [matA, matB] = [matrixA.mat, matrixB.mat];
    let row, col;

    if (matrixA.eqRows(matrixB) && matrixA.eqCols(matrixB)) {
      for (row = 0; row < matA.length; row++) {
        for (col = 0; col < matA[row].length; col++) {
          newMat[row][col] = matA[row][col] + matB[row][col];
        }
      }
    } else if (matrixA.eqRows(matrixB) && (matrixB.cols === 1)) {
      for (row = 0; row < matA.length; row++) {
        for (col = 0; col < matA[row].length; col++) {
          newMat[row][col] = matA[row][col] + matB[row][0];
        }
      }
    } else if (matrixA.eqCols(matrixB) && (matrixB.rows === 1)) {
      for (row = 0; row < matA.length; row++) {
        for (col = 0; col < matA[row].length; col++) {
          newMat[row][col] = matA[row][col] + matB[0][col];
        }
      }
    } else {
      return null;
    }
    return newMatrix;
  }

  sub(matrix) {

    if (typeof (matrix) === "number") return this.subValue(matrix);
    if (!(matrix instanceof Matrix)) return null;

    const [rows, cols] = (this.size() >= matrix.size()) ? this.shape() : matrix.shape();
    const newMatrix = Matrix.Zeros(rows, cols);
    const newMat = newMatrix.mat;
    const [matA, matB] = [this.mat, matrix.mat];
    let row, col;

    if (this.eqRows(matrix) && this.eqCols(matrix)) {
      for (row = 0; row < matA.length; row++) {
        for (col = 0; col < matA[row].length; col++) {
          newMat[row][col] = matA[row][col] - matB[row][col];
        }
      }
    } else if (this.eqRows(matrix)) {
      if (this.cols === 1) {
        for (row = 0; row < matB.length; row++) {
          for (col = 0; col < matB[row].length; col++) {
            newMat[row][col] = matA[row][0] - matB[row][col];
          }
        }
      } else if (matrix.cols === 1) {
        for (row = 0; row < matA.length; row++) {
          for (col = 0; col < matA[row].length; col++) {
            newMat[row][col] = matA[row][col] - matB[row][0];
          }
        }
      } else {
        return null;
      }
    } else if (this.eqCols(matrix)) {
      if (this.rows === 1) {
        for (row = 0; row < matB.length; row++) {
          for (col = 0; col < matB[row].length; col++) {
            newMat[row][col] = matA[0][col] - matB[row][col];
          }
        }
      } else if (matrix.rows === 1) {
        for (row = 0; row < matA.length; row++) {
          for (col = 0; col < matA[row].length; col++) {
            newMat[row][col] = matA[row][col] - matB[0][col];
          }
        }
      }
    } else {
      return null;
    }
    return newMatrix;
  }

  multiply(matrix) {

    if (typeof (matrix) === "number") return this.multiplyValue(matrix);
    if (!(matrix instanceof Matrix)) return null;

    const [matrixA, matrixB] = (this.size() >= matrix.size()) ? [this, matrix] : [matrix, this];
    const [matA, matB] = [matrixA.mat, matrixB.mat];
    const newMatrix = Matrix.Zeros(matrixA.rows, matrixA.cols);
    const newMat = newMatrix.mat;
    let row, col;

    if (matrixA.eqRows(matrixB) && matrixA.eqCols(matrixB)) {
      for (row = 0; row < matA.length; row++) {
        for (col = 0; col < matA[row].length; col++) {
          newMat[row][col] = matA[row][col] * matB[row][col];
        }
      }
    } else if (matrixA.eqRows(matrixB) && (matrixB.cols === 1)) {
      for (row = 0; row < matA.length; row++) {
        for (col = 0; col < matA[row].length; col++) {
          newMat[row][col] = matA[row][col] * matB[row][0];
        }
      }

    } else if (matrixA.eqCols(matrixB) && (matrixB.rows === 1)) {
      for (row = 0; row < matA.length; row++) {
        for (col = 0; col < matA[row].length; col++) {
          newMat[row][col] = matA[row][col] * matB[0][col];
        }
      }
    } else {
      return null;
    }

    return newMatrix;
  }

  divide(matrix) {

    if (typeof (matrix) === "number") return this.divideValue(matrix);
    if (!(matrix instanceof Matrix)) return null;

    const [rows, cols] = (this.size() >= matrix.size()) ? this.shape() : matrix.shape();
    const newMatrix = Matrix.Zeros(rows, cols);
    const newMat = newMatrix.mat;
    const [matA, matB] = [this.mat, matrix.mat];
    let row, col;

    if (this.eqRows(matrix) && this.eqCols(matrix)) {
      for (row = 0; row < matA.length; row++) {
        for (col = 0; col < matA[row].length; col++) {
          newMat[row][col] = matA[row][col] / matB[row][col];
        }
      }
    } else if (this.eqRows(matrix)) {
      if (this.cols === 1) {
        for (row = 0; row < matB.length; row++) {
          for (col = 0; col < matB[row].length; col++) {
            newMat[row][col] = matA[row][0] / matB[row][col];
          }
        }
      } else if (matrix.cols === 1) {
        for (row = 0; row < matA.length; row++) {
          for (col = 0; col < matA[row].length; col++) {
            newMat[row][col] = matA[row][col] / matB[row][0];
          }
        }
      } else {
        return null;
      }
    } else if (this.eqCols(matrix)) {
      if (this.rows === 1) {
        for (row = 0; row < matB.length; row++) {
          for (col = 0; col < matB[row].length; col++) {
            newMat[row][col] = matA[0][col] / matB[row][col];
          }
        }
      } else if (matrix.rows === 1) {
        for (row = 0; row < matA.length; row++) {
          for (col = 0; col < matA[row].length; col++) {
            newMat[row][col] = matA[row][col] / matB[0][col];
          }
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
    const newMatrix = Matrix.Zeros(this.rows, matrix.cols);
    let row,col,value,rep;
    for (row = 0; row < this.rows; row++) {
      for (col = 0; col < matrix.cols; col++) {
        value = 0;
        for (rep = 0; rep < REPS; rep++) {
          value += this.mat[row][rep] * matrix.mat[rep][col];
        }
        newMatrix.mat[row][col] = value;
      }
    }
    return newMatrix;
  }

  /* 
    ###############################################################
    ##############   S E L F   O P E R A T I O N S   ##############
    ###############################################################
  */

  sum(axis = null) {
    let row,col;
    switch (axis) {
      case null:
        let value = 0;
        for (row = 0; row < this.rows; row++) {
          for (col = 0; col < this.cols; col++) {
            value += this.mat[row][col];
          }
        }
        return value;
      case 0:
        const rowMatrix = Matrix.Zeros(1, this.cols);
        for (col = 0; col < this.cols; col++) {
          for (row = 0; row < this.rows; row++) {
            rowMatrix.mat[0][col] += this.mat[row][col];
          }
        }
        return rowMatrix;
      case 1:
        const colMatrix = Matrix.Zeros(this.rows, 1);
        for (row = 0; row < this.rows; row++) {
          for (col = 0; col < this.cols; col++) {
            colMatrix.mat[row][0] += this.mat[row][col];
          }
        }
        return colMatrix;

      default:
        return null;
    }
  }

  round(dec = 0) {
    const OP = 10 ** dec;
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    let row,col;
    for (row = 0; row < this.rows; row++) {
      for (col = 0; col < this.cols; col++) {
        newMatrix.mat[row][col] = Math.round(this.mat[row][col] * OP) / OP;
      }
    }
    return newMatrix;
  }

  flatten() {
    const matFlat = [];
    for (let row = 0; row < this.mat.length; row++) {
      matFlat.push(...this.mat[row]);
    }
    return new Matrix([matFlat]);
  }

  transpose() {
    const newMatrix = Matrix.Zeros(this.cols, this.rows);
    let row,col;
    for (row = 0; row < this.mat.length; row++) {
      for (col = 0; col < this.mat[row].length; col++) {
        newMatrix.mat[col][row] = this.mat[row][col];
      }
    }
    return newMatrix;
  }

  exp() {
    const newMatrix = Matrix.Zeros(this.rows, this.cols);
    let row,col;
    for (row = 0; row < this.mat.length; row++) {
      for (col = 0; col < this.mat[row].length; col++) {
        newMatrix.mat[row][col] = Math.exp(this.mat[row][col]);
      }
    }
    return newMatrix;
  }
}
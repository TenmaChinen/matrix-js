let result;

const matrixA = new Matrix([[0, -2, 3], [1, 3, 2]]);
const matrixB = new Matrix([[4, 1, 2], [6, 3, 1]]);
const matrixC = new Matrix([[4], [6]]);
const matrixD = new Matrix([[1, 2, 3]]);

const matrixE = new Matrix([[3, 2], [0, -2], [2, 1]]);
const matrixF = new Matrix([[1, 2, 4]]);
const matrixG = new Matrix([[1], [2]]);

const matrixH = new Matrix([[0.12643,-0.46,1.6938]]);

QUnit.module('Add Method', function () {
  QUnit.test('Matrix A + Matrix B', function (assert) {
    const resultMatrix = new Matrix([[4, -1, 5], [7, 6, 3]]);
    assert.deepEqual(matrixA.add(matrixB), resultMatrix);
    assert.deepEqual(matrixB.add(matrixA), resultMatrix);
  });

  QUnit.test('Matrix A [2,3] + Matrix C [2,1]', function (assert) {
    const resultMatrix = new Matrix([[4, 2, 7], [7, 9, 8]]);
    assert.deepEqual(matrixA.add(matrixC), resultMatrix);
    assert.deepEqual(matrixC.add(matrixA), resultMatrix);
  });

  QUnit.test('Matrix A [2,3] + Matrix D [1,3]', function (assert) {
    const resultMatrix = new Matrix([[1, 0, 6], [2, 5, 5]]);
    assert.deepEqual(matrixA.add(matrixD), resultMatrix);
    assert.deepEqual(matrixD.add(matrixA), resultMatrix);
  });

  QUnit.test('Matrix A + 10', function (assert) {
    const resultMatrix = new Matrix([[10, 8, 13], [11, 13, 12]])
    assert.deepEqual(matrixA.addValue(10), resultMatrix);
    assert.deepEqual(matrixA.add(10), resultMatrix);
  });

  QUnit.test('Matrix A + (-10)', function (assert) {
    const resultMatrix = new Matrix([[-10, -12, -7], [-9, -7, -8]])
    assert.deepEqual(matrixA.addValue(-10), resultMatrix);
    assert.deepEqual(matrixA.add(-10), resultMatrix);
  });

  QUnit.test('Matrix A + String', function (assert) {
    assert.equal(matrixA.add("String"), null);
    assert.equal(matrixA.addValue("String"), null);
  });

  QUnit.test('Matrix A + Matrix E ( Shape Mismatch )', function (assert) {
    assert.equal(matrixA.add(matrixE), null);
    assert.equal(matrixA.addValue(matrixE), null);
  });
});

QUnit.module('Sub Method', function () {
  QUnit.test('Matrix A - Matrix B', function (assert) {
    assert.deepEqual(matrixA.sub(matrixB), new Matrix([[-4, -3, 1], [-5, 0, 1]]));
    assert.deepEqual(matrixB.sub(matrixA), new Matrix([[4, 3, -1], [5, 0, -1]]));
  });

  QUnit.test('Matrix A [2,3] - Matrix C [2,1]', function (assert) {
    assert.deepEqual(matrixA.sub(matrixC), new Matrix([[-4, -6, -1], [-5, -3, -4]]));
    assert.deepEqual(matrixC.sub(matrixA), new Matrix([[4, 6, 1], [5, 3, 4]]));
  });

  QUnit.test('Matrix A [2,3] - Matrix D [1,3]', function (assert) {
    assert.deepEqual(matrixA.sub(matrixD), new Matrix([[-1, -4, 0], [0, 1, -1]]));
    assert.deepEqual(matrixD.sub(matrixA), new Matrix([[1, 4, 0], [0, -1, 1]]));
  });

  QUnit.test('Matrix A - 10', function (assert) {
    const resultMatrix = new Matrix([[-10, -12, -7], [-9, -7, -8]]);
    assert.deepEqual(matrixA.subValue(10), resultMatrix);
    assert.deepEqual(matrixA.sub(10), resultMatrix);
  });

  QUnit.test('Matrix A - (-10)', function (assert) {
    const resultMatrix = new Matrix([[10, 8, 13], [11, 13, 12]]);
    assert.deepEqual(matrixA.subValue(-10), resultMatrix);
    assert.deepEqual(matrixA.sub(-10), resultMatrix);
  });

  QUnit.test('Matrix A - String', function (assert) {
    assert.equal(matrixA.sub("String"), null);
    assert.equal(matrixA.subValue("String"), null);
  });

  QUnit.test('Matrix A - Matrix E ( Shape Mismatch )', function (assert) {
    assert.equal(matrixA.sub(matrixE), null);
    assert.equal(matrixA.subValue(matrixE), null);
  });
});


QUnit.module('Multiply Method', function () {
  QUnit.test('Matrix A ( Mult ) Matrix B', function (assert) {
    const resultMatrix = new Matrix([[0, -2, 6], [6, 9, 2]]);
    assert.deepEqual(matrixA.multiply(matrixB), resultMatrix);
    assert.deepEqual(matrixB.multiply(matrixA), resultMatrix);
  });


  QUnit.test('Matrix A [2,3] ( Mult ) Matrix C [2,1]', function (assert) {
    const resultMatrix = new Matrix([[0, -8, 12], [6, 18, 12]]);
    assert.deepEqual(matrixA.multiply(matrixC), resultMatrix);
    assert.deepEqual(matrixC.multiply(matrixA), resultMatrix);
  });

  QUnit.test('Matrix A [2,3] ( Mult ) Matrix D [1,3]', function (assert) {
    const resultMatrix = new Matrix([[0, -4, 9], [1, 6, 6]]);
    assert.deepEqual(matrixA.multiply(matrixD), resultMatrix);
    assert.deepEqual(matrixD.multiply(matrixA), resultMatrix);
  });

  QUnit.test('Matrix A ( Mult ) (10)', function (assert) {
    const resultMatrix = new Matrix([[0, -20, 30], [10, 30, 20]]);
    assert.deepEqual(matrixA.multiply(10), resultMatrix);
    assert.deepEqual(matrixA.multiplyValue(10), resultMatrix);
  });

  QUnit.test('Matrix A ( Mult ) String', function (assert) {
    assert.equal(matrixA.multiply("String"), null);
    assert.equal(matrixA.multiplyValue("String"), null);
  });

  QUnit.test('Matrix A ( Mult ) Matrix E ( Shape Mismatch )', function (assert) {
    assert.equal(matrixA.multiply(matrixE), null);
    assert.equal(matrixA.multiplyValue(matrixE), null);
  });
});

QUnit.module('Divide Method', function () {
  QUnit.test('Matrix A ( Div ) Matrix B', function (assert) {
    assert.deepEqual(matrixA.divide(matrixB), new Matrix([[0.0, -2.0, 1.5], [0.16666666666666666, 1.0, 2.0]]));
    assert.deepEqual(matrixB.divide(matrixA), new Matrix([[Infinity, -0.5, 0.6666666666666666], [6.0, 1.0, 0.5]]));
  });

  QUnit.test('Matrix A [2,3] ( Div ) Matrix C [2,1]', function (assert) {
    assert.deepEqual(matrixA.divide(matrixC), new Matrix([[0.0, -0.5, 0.75], [0.16666666666666666, 0.5, 0.3333333333333333]]));
    assert.deepEqual(matrixC.divide(matrixA), new Matrix([[Infinity, -2.0, 1.3333333333333333], [6.0, 2.0, 3.0]]));
  });

  QUnit.test('Matrix A [2,3] ( Div ) Matrix D [1,3]', function (assert) {
    assert.deepEqual(matrixA.divide(matrixD), new Matrix([[0.0, -1.0, 1.0], [1.0, 1.5, 0.6666666666666666]]));
    assert.deepEqual(matrixD.divide(matrixA), new Matrix([[Infinity, -1.0, 1.0], [1.0, 0.6666666666666666, 1.5]]));
  });

  QUnit.test('Matrix A ( Div ) (10)', function (assert) {
    const resultMatrix = new Matrix([[0.0, -0.2, 0.3], [0.1, 0.3, 0.2]]);
    assert.deepEqual(matrixA.divide(10), resultMatrix);
    assert.deepEqual(matrixA.divideValue(10), resultMatrix);
  });

  QUnit.test('Matrix A ( Div ) String', function (assert) {
    assert.equal(matrixA.divide("String"), null);
    assert.equal(matrixA.divideValue("String"), null);
  });

  QUnit.test('Matrix A ( Div ) Matrix E ( Shape Mismatch )', function (assert) {
    assert.equal(matrixA.divide(matrixE), null);
    assert.equal(matrixA.divideValue(matrixE), null);
  });
});

QUnit.module('Dot Method', function () {
  QUnit.test('Matrix A [2,3] ( DOT ) Matrix E [3,2]', function (assert) {
    assert.deepEqual(matrixA.dot(matrixE), new Matrix([[6, 7], [7, -2]]));
  });

  QUnit.test('Matrix A [2,3] ( DOT ) Matrix A [2,3] ( Mismatch )', function (assert) {
    assert.deepEqual(matrixA.dot(matrixA), null);
  });
});

QUnit.module('Sum Method', function () {
  QUnit.test('Matrix A ( SUM ) [ Null | 0 | 1 ]', function (assert) {
    assert.deepEqual(matrixA.sum(), 7);
    assert.deepEqual(matrixA.sum(0), new Matrix([[1,1,5]]));
    assert.deepEqual(matrixA.sum(1), new Matrix([[1], [6]]));
  });
});


QUnit.module('Round Method', function () {
  QUnit.test('Matrix A ( Round )', function (assert) {
    assert.deepEqual(matrixH.round(), new Matrix([[0.0, -0.0, 2.0]]));
    assert.deepEqual(matrixH.round(1), new Matrix([[0.1, -0.5, 1.7]]));
    assert.deepEqual(matrixH.round(2), new Matrix([[0.13, -0.46, 1.69]]));
  });
});

QUnit.module('Flatten Method', function () {
  QUnit.test('Matrix A ( Flatten )', function (assert) {
    assert.deepEqual(matrixA.flatten(), new Matrix([[0, -2, 3, 1, 3, 2]]));
  });
});

QUnit.module('Transpose Method', function () {
  QUnit.test('Matrix A ( Transpose )', function (assert) {
    assert.deepEqual(matrixA.transpose(), new Matrix([[0, 1], [-2, 3], [3, 2]]));
  });
});
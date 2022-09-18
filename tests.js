let result;

const matA = new Matrix([[0, 2, 3], [4, 5, 6]]);
const matB = new Matrix([[10, 2], [4, 5], [2, 1]]);
const matC = new Matrix([[4, 1, 2], [6, 3, 1]]);

console.log("\nMatrix A");
matA.print();

console.log("\nMatrix B");
matB.print();

console.log("\nMatrix C");
matC.print();

// console.log("\n( Matrix A ) DOT ( Matrix B )");

// matA.dot(matB).print();

// console.log("\n( Matrix A ) ADD ( Matrix C )");
// matA.add(matC).print();

// console.log("\n( Matrix C ) ADD ( 10 )");
// matC.add(10).print();

// console.log("\n( Matrix C ) ADD ( 10 ) [ value ]");
// matC.addValue(10).print();

// console.log("\n( Matrix C ) ADD ( Non Matrix ) ( add )");
// result = matC.add("String");
// if ( result ) result.print();
// else console.log( "NULL" );

// console.log("\n( Matrix A ) MULTIPLY ( Matrix C )");
// matA.multiply(matC).print();

// console.log("\n( Matrix A ) MULTIPLY ( Matrix C ) [ value ]");
// matA.multiply(10).print();

// console.log("\n( Matrix C ) MULTIPLY ( Non Matrix ) [ value ]");
// result = matC.multiplyValue("String");
// if ( result ) result.print();
// else console.log( "NULL" );

console.log("\n( Matrix A ) DIVIDE ( Matrix C ) [ value ]");
result = matA.divide(matC);
if ( result ) result.print();
else console.log( "NULL" );
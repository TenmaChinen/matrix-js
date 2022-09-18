let result;

const matA = new Matrix([[0, 2, 3], [12, 15, 6]]);
const matB = new Matrix([[10, 2], [4, 5], [2, 1]]);
const matC = new Matrix([[4, 1, 2], [6, 3, 1]]);
const matD = new Matrix([[1, 2, 4]]);
const matE = new Matrix([[1], [2]]);

console.log("\nMatrix A");
matA.print();

// console.log("\nMatrix B");
// matB.print();

// console.log("\nMatrix C");
// matC.print();

console.log("\nMatrix D");
matD.print();

console.log("\nMatrix E");
matE.print();

/* #########################################################
   #################   O P E R A T O N S   #################
   ######################################################### */

/* #############################################
   #################   A D D   #################
   ############################################# */

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

/* #############################################
   ############   M U L T I P L Y   ############
   ############################################# */

// console.log("\n( Matrix A ) MULTIPLY ( Matrix C )");
// matA.multiply(matC).print();

// console.log("\n( Matrix A ) MULTIPLY ( Matrix C ) [ value ]");
// matA.multiply(10).print();

// console.log("\n( Matrix C ) MULTIPLY ( Non Matrix ) [ value ]");
// result = matC.multiplyValue("String");
// if ( result ) result.print();
// else console.log( "NULL" );

/* #############################################
   ##############   D I V I D E   ##############
   ############################################# */

// console.log("\n( Matrix A ) DIVIDE ( Matrix C )");
// result = matA.divide(matC);
// if ( result ) result.print();
// else console.log( "NULL" );

// console.log("\n( Matrix A ) DIVIDE ( 2 ) [ value ]");
// result = matA.divide(2);
// if ( result ) result.print();
// else console.log( "NULL" );

// console.log("\n( Matrix A ) DIVIDE ( Infinity ) [ value ]");
// result = matA.divide(Infinity);
// if ( result ) result.print();
// else console.log( "NULL" );

console.log("\n( Matrix A ) DIVIDE ( Matrix D )");
result = matA.divide(matD);
if ( result ) result.print();
else console.log( "NULL" );

console.log("\n( Matrix A ) DIVIDE ( Matrix D Transpose )");

if ( result ) result.print();
else console.log( "NULL" );

/* #############################################
   #########   D O T   P R O D U C T   #########
   ############################################# */

// console.log("\n( Matrix A ) DOT ( Matrix B )");

// matA.dot(matB).print();

/* #########################################################
   ############   S E L F   O P E R A T O N S   ############
   ######################################################### */

/* #############################################
   #################   S U M   #################
   ############################################# */

// console.log("\n( Matrix A ) SUM ( axis = null )");
// console.log(matA.sum());

// console.log("\n( Matrix A ) SUM ( axis = 0 )");
// matA.sum(0).print();

// console.log("\n( Matrix A ) SUM ( axis = 1 )");
// matA.sum(1).print();

/* #############################################
   ###########   T R A N S P O S E   ###########
   ############################################# */

console.log("\n( Matrix A ) Transpose");
matA.transpose().print();
let result;

const matrixA = new Matrix([[0, -2, 3], [1, 3, 2]]);
const matrixB = new Matrix([[3, 2], [0, -2], [2, 1]]);
const matrixC = new Matrix([[4, 1, 2], [6, 3, 1]]);
const matrixD = new Matrix([[1, 2, 4]]);
const matrixE = new Matrix([[1], [2]]);

console.log("\nMatrix A");
matrixA.print();

console.log("\nMatrix B");
matrixB.print();

// console.log("\nMatrix C");
// matrixC.print();

// console.log("\nMatrix D");
// matrixD.print();

// console.log("\nMatrix E");
// matrixE.print();

/* #########################################################
   ##########   M A T R I X   O P E R A T O N S   ##########
   ######################################################### */

/* #############################################
   #################   A D D   #################
   ############################################# */

// console.log("\n( Matrix A ) ADD ( Matrix C )");
// matrixA.add(matrixC).print();

// console.log("\n( Matrix C ) ADD ( 10 )");
// matrixC.add(10).print();

// console.log("\n( Matrix C ) ADD ( 10 ) [ value ]");
// matrixC.addValue(10).print();

// console.log("\n( Matrix C ) ADD ( Non Matrix ) ( add )");
// result = matrixC.add("String");
// if ( result ) result.print();
// else console.log( "NULL" );

/* #############################################
   #################   S U B   #################
   ############################################# */

// console.log("\n( Matrix A ) SUB ( Matrix C )");
// matrixA.sub(matrixC).print();

// console.log("\n( Matrix C ) SUB ( 10 )");
// matrixA.sub(5).print();

// console.log("\n( Matrix C ) SUB ( 5 ) [ value ]");
// matrixA.subValue(5).print();

// console.log("\n( Matrix C ) SUB ( Non Matrix ) ( add )");
// result = matrixA.sub("String");
// if ( result ) result.print();
// else console.log( "NULL" );

/* #############################################
   ############   M U L T I P L Y   ############
   ############################################# */

// console.log("\n( Matrix A ) MULTIPLY ( Matrix C )");
// matrixA.multiply(matrixC).print();

// console.log("\n( Matrix A ) MULTIPLY ( 10 ) [ value ]");
// matrixA.multiply(10).print();

// console.log("\n( Matrix A ) MULTIPLY ( -1 ) [ value ]");
// matrixA.multiply(-1).print();

// console.log("\n( Matrix C ) MULTIPLY ( Non Matrix ) [ value ]");
// result = matrixC.multiplyValue("String");
// if ( result ) result.print();
// else console.log( "NULL" );

/* #############################################
   ##############   D I V I D E   ##############
   ############################################# */

// console.log("\n( Matrix A ) DIVIDE ( Matrix C )");
// result = matrixA.divide(matrixC);
// if ( result ) result.print();
// else console.log( "NULL" );

// console.log("\n( Matrix A ) DIVIDE ( 2 ) [ value ]");
// result = matrixA.divide(2);
// if ( result ) result.print();
// else console.log( "NULL" );

// console.log("\n( Matrix A ) DIVIDE ( Infinity ) [ value ]");
// result = matrixA.divide(Infinity);
// if ( result ) result.print();
// else console.log( "NULL" );

// console.log("\n( Matrix A ) DIVIDE ( 0 ) [ value ]");
// result = matrixA.divide(0);
// if ( result ) result.print();
// else console.log( "NULL" );

// console.log("\n( Matrix A ) DIVIDE ( Matrix D )");
// result = matrixA.divide(matrixD);
// if ( result ) result.print();
// else console.log( "NULL" );

// console.log("\n( Matrix A ) DIVIDE ( Matrix E )");
// result = matrixA.divide(matrixE);
// if ( result ) result.print();
// else console.log( "NULL" );

/* #############################################
   #########   D O T   P R O D U C T   #########
   ############################################# */

console.log("\n( Matrix A ) DOT ( Matrix B )");

matrixA.dot(matrixB).print();

/* #########################################################
   ############   S E L F   O P E R A T O R S   ############
   ######################################################### */

   
/* #############################################
   #############   M I N   M A X   #############
   ############################################# */

// console.log("\n( Matrix A ) MIN");
// console.log(matrixA.min());

// console.log("\n( Matrix A ) MAX");
// console.log(matrixA.max());

/* #############################################
   #################   S U M   #################
   ############################################# */

// console.log("\n( Matrix A ) SUM ( axis = null )");
// console.log(matrixA.sum());

// console.log("\n( Matrix A ) SUM ( axis = 0 )");
// matrixA.sum(0).print();

// console.log("\n( Matrix A ) SUM ( axis = 1 )");
// matrixA.sum(1).print();

/* #############################################
   ###########   T R A N S P O S E   ###########
   ############################################# */

// console.log("\n( Matrix A ) Transpose");
// matrixA.transpose().print();

/* #############################################
   #################   E X P   #################
   ############################################# */

  //  console.log("\n( Matrix A ) EXP");

  //  matrixA.exp().print();
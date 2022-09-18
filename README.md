# matrix-js

## Description
JavaScript vanilla class to operate with matrices.
Easy create matrices objects from Arrays to perform add, subtraction, division, bitwise or dot product operations between matrices and numbers.

Similar to **Numpy** the well known Python library, this class allows transposing, flatten, find minimum and maximum values, self sum collapse rows or columns like `numpy.sum(array,axis)` operations, and much more.

The library also came with a print method to display the a styled matrix representation in the console.

The library is meant to be compatible with any browser, specially to perform the feed-forward calculations for a python generated file library, that converts the Keras trained models data to Python or JavaScript class model, ready to use. This repository is available here.

https://github.com/TenmaChinen/ann-models-2-npy-js

- Standard library modules used:
 - Array - mainly used to manage list of objects, in this case uniquely to keep an Array version of the raw matrix as attribute.

- Project was made entirely in JavaScript ES2015 and tested in Edge browser.

## Setup

- Clone the repository in your local machine.
- Run the index.html file, and open the console from the debug tools to see some basic operations.

- To use the library, just copy and paste it on your own projects, and import the library by:

    ```html
    <script src="matrix.js"></script>
    ```

- Create matrix objects like this:
  ```javascript
  const matrixA = new Matrix([[0, -2, 3], [1, 3, 2]]);
  const matrixB = new Matrix([[3, 2], [0, -2], [2, 1]]);
  ```

- Check the shape, min or max values
  ```javascript
  matrixA.shape(); // [ 2 , 3 ] => ( Rows & Columns )
  matrixA.min();   //  -2
  matrixA.max();   //  3
  ```

- Perform a dot operations like the following script:
  ```js
  const matrixC = matrixA.dot(matrixB);
  matrixC.print();
  ```
  ![dot_product_matrix-js](https://user-images.githubusercontent.com/36393143/190913289-fe8a3883-98c6-4d98-839c-39ac2672774a.png)

## Future Work
- Add comparative of equality between matrices.
- Add static methods to perform other operations like value divide matrix, which is available using `matrixA.pow(-1)`, but it's not user friendly.

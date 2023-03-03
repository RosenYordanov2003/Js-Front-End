function printMatrix(n) {
  new Array(n).fill(new Array(n).fill(n)).forEach((row)=>console.log(row.join(' ')));
}
printMatrix(4); 

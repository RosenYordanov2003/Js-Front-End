function printMatrix(n) {
<<<<<<< HEAD
  new Array(n).fill(new Array(n).fill(n)).forEach((row)=>console.log(row.join(' ')));
}
printMatrix(4); 
=======
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += `${n} `;
    }
    console.log(row);
  }
}
printMatrix(4);
>>>>>>> 704e2f73a5b308d670e08b8dc680ef77af1e11e5

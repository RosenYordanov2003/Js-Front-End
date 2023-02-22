function Solve(n, array){
    let arrayOutput =  []
    for (let index = 0; index < n; index++) {
        arrayOutput.push(array[index])
    }
    // Reverse(arrayOutput)
    arrayOutput.reverse()
    console.log(arrayOutput.join(' '))
}
// function Reverse(array){
//     for (let index = 0; index < array.length/2; index++) {
//         let currentElement = array[index]
//         let lastElement = array[array.length-1-index]
//         array[index] = lastElement
//         array[array.length-1-index] = currentElement
//     }
// }
Solve(4,[30,20,10,40])
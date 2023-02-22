function Solve(argument){
    let type = typeof(argument)
    if(type!='number'){
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
    else{
      let result = Math.PI*argument**2
      console.log(result.toFixed(2))
    }
}
Solve(5)
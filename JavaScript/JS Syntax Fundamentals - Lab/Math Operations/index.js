function Solve(number1, number2, symbol){
    if(symbol==='+'){
        console.log(number1+number2)
    }
    else if(symbol==='-'){
        console.log(number1-number2)
    }
    else if(symbol==='*'){
        console.log(number1*number2)
    }
    else if(symbol==='/'){
        console.log(number1/number2)
    }
    else if(symbol==='%'){
        console.log(number1%number2)
    }
    else if(symbol==='**'){
        console.log(number1**number2)
    }
}
Solve(5, 6, '+')
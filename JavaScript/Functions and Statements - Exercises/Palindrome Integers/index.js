function palindromeIntegers(array){
  
    const isPalindrome = (number,reversedNumber)=>{
        reversedNumber = Number(String(number).split('').reverse().join(''));
        return number===reversedNumber;
    }

    for (let index = 0; index < array.length; index++) {
        console.log(isPalindrome(array[index]));
    }
}
palindromeIntegers([123,323,421,121]);
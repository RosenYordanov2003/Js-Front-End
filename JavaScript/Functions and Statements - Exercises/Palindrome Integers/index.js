function palindromeIntegers(array){
  
    function isPalindrome(number){
        const originalNumber = number;
        const reversedNumber = Number(String(number).split('').reverse().join(''));
        return originalNumber===reversedNumber;
    }

    for (let index = 0; index < array.length; index++) {
        console.log(isPalindrome(array[index]));
    }
}
palindromeIntegers([123,323,421,121]);
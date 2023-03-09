function oddOccurrences(input){
    const array = input.split(' ').map((x)=>x.toLowerCase());
   
    let wordObject = {};
    for (let index = 0; index < array.length; index++) {
        if(wordObject.hasOwnProperty(array[index])){
            wordObject[array[index]]++;
        }
        else{
            wordObject[array[index]] = 1;
        }        
    }
    let keys = Object.keys(wordObject).filter((key)=>wordObject[key]%2!==0);
    console.log(keys.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');


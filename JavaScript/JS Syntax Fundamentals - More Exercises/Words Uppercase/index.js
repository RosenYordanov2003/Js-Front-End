function solve(text){
  text = text.toUpperCase();
  const regex = /[A-z0-9]+/g;
  let array = [...text.matchAll(regex)];
  console.log(array.join(', '));
}
solve('Hi, how are you?')

function solve(text) {
  textTokens = text.split(" ");
  const regexPattern = new RegExp('(#[A-Za-z]+)');
  let output = [];
  for (let index = 0; index < textTokens.length; index++) {
    if (textTokens[index].includes("#")) {
      if (regexPattern.test(textTokens[index])) {
        output.push(textTokens[index].substring(1,textTokens[index].length));
      }
    }
  }
  console.log(output.join("\r\n"))
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");


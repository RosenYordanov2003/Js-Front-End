function convert(name, lastName, hairColor){
    let person = {
        name,
        lastName,
        hairColor
    }
    const resultAsJson = JSON.stringify(person);
    console.log(resultAsJson);
}
convert('George', 'Jones', 'Brown');
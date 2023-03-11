function schoolRegister(array) {
  let schoolObject = {};

  for (let index = 0; index < array.length; index++) {
    const line = array[index]
      .split(", ")
      .join(" ")
      .split(": ")
      .join(" ")
      .split(" ");
    const name = line[2];
    const nextGrade = Number(line[4]) + 1;
    const grade = Number(line[10]);
    if (!schoolObject.hasOwnProperty(nextGrade)) {
      schoolObject[nextGrade] = [];
    }
    if (grade >= 3) {
      schoolObject[nextGrade].push({ name, grade });
    }
  }
  calculateAverageGrade();

  const keys = Object.keys(schoolObject).filter(
    (key) => schoolObject[key].length > 0
  );
  for (let index = 0; index < keys.length; index++) {
    console.log(`${keys[index]} Grade`)
    const names = schoolObject[keys[index]].map((student)=>student.name);
    console.log(`List of students: ${names.join(', ')}`);
    console.log(`Average annual score from last year: ${schoolObject[keys[index]].average.toFixed(2)}`);
    console.log();
  }

  function calculateAverageGrade() {
    const keys = Object.keys(schoolObject).filter(
      (key) => schoolObject[key].length > 0
    );
    for (let index = 0; index < keys.length; index++) {
      schoolObject[keys[index]].average =
        schoolObject[keys[index]].reduce((currentGrade, studentGrade) => {
          return currentGrade + studentGrade.grade;
        }, 0) / schoolObject[keys[index]].length;
    }
  }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    );

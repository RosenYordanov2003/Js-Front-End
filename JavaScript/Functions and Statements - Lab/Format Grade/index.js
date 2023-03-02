function formatGrade (grade){

    function printGrade (grade){
        return grade.toFixed(2);
    }
    if(grade>=3.00&&grade<3.50){
        console.log(`Poor (${printGrade(grade)})`);
    }
    else if(grade>=3.50&&grade<4.50){
        console.log(`Good (${printGrade(grade)})`);
    }
    else if(grade>=4.50&&grade<5.50){
        console.log(`Very good (${printGrade(grade)})`);
    }
    else if(grade>=5.50){
        console.log(`Excellent (${printGrade(grade)})`);
    }
    else{
        console.log(`Fail (2)`);
    }
}
formatGrade(3)
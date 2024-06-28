let grade = prompt("Enter your grade")
if (grade>=90 && grade <= 100){
    console.log("The grade you got is " + grade + " - A")
}else if (grade>=80 && grade <=89){
    console.log("The grade you got is " + grade + " - B")
}
if (grade>=70 && grade <= 79){
    console.log("The grade you got is " + grade + " - C")
}
if (grade>=60 && grade <= 69){
    console.log("The grade you got is " + grade + " - D")
}
else if(grade>100){
    console.log("This not a grade.")
}else if(grade>=0 && grade <=59){
    console.log("The grade you got is " + grade + " - F")
}
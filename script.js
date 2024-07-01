let studentObj1 = {
    id: 1,
    name: "ajay",
    grades:45,
}

let studentObj2 = {
    id: 2,
    name: "rakesh",
    Grades:65,
}

let studentObj3 = {
    id: 3,
    name: "vaibhav",
    grades: 30,
}
let studentObj4 = {
    id: 4,
    name: "nikhil",
    grades: 15,
}

let studentArr = []

function addStudent(newstudent) {
    studentArr.push (newstudent)
}


function toDelete(deleteStd){
    let newId = deleteStd.id;
    // console.log(newId);
    for(let i = 0; i < studentArr.length; i++){
        if(newId === studentArr[i].id){
            // delete(studentsArr[i]);
            studentArr.splice(i, i)
        }
    }
    return studentArr;
}
console.log(studentArr)
addStudent(studentObj1);
addStudent(studentObj2)
addStudent(studentObj3)
addStudent(studentObj4)
console.log(studentArr)
toDelete(studentObj4);
console.log(studentArr);

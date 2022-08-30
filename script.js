// DOM Elements

const studentData = document.getElementById('studentData');
const studentsContainer = document.querySelector('.students');
const nameInput = studentData['name']; // this way you can get the childrem from studentData
const ageInput = studentData['age'];
const rollInput = studentData['roll'];

// All student will be an object like {name:'', age: number, roll: number}
//JSON.parse()converts string into an array
const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll,
    });

    localStorage.setItem("students", JSON.stringify(students));//The second parameter needed to be a string but we were passing the array, so the json.stringify turns into sting

    return { name, age, roll};
};

const createStudentElement = ({name, age, roll}) => {
   //Create all elements
   const studentDiv = document.createElement('div');
   const studentName = document.createElement('h2');
   const studentAge = document.createElement('p');
   const studentRoll = document.createElement('p');

    //Adds the innerTexts 
    // If Students was passed as parameter here ill need to cocatenate like students.name, student.age 
    studentName.innerText = 'Student Name: ' + name;
    studentAge.innerText = 'Student Age: ' + age;
    studentRoll.innerText = 'Student Roll: ' + roll;

    //Append the elements to the DOM
    studentDiv.append(studentName, studentAge,studentRoll);// .append when is more than one child
    studentsContainer.appendChild(studentDiv);

    studentsContainer.style.display = students.length === 0 ? "none" :"flex"
};

studentsContainer.style.display = students.length === 0 ? "none" :"flex"

//As students is an array you can call the forEach method
students.forEach(createStudentElement); // Sem chamar a função para ela não ser executada e ficar simplesmente com parametro

studentData.onsubmit = (e) => {
    e.preventDefault(); // this prevent the page to refresh

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    )

    createStudentElement(newStudent)
//make the value of the input clear
    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
};

/// <reference path="./js/subjects/Teacher.ts" />
/// <reference path="./js/subjects/Subject.ts" />
/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/React.ts" />
/// <reference path="./js/subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

const javaTeacher: Subjects.Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  experienceTeachingJava: 0, // No experience
};

const reactTeacher: Subjects.Teacher = {
  firstName: 'Mike',
  lastName: 'Jordan',
  experienceTeachingReact: 3,
};

// Test Cpp
cpp.setTeacher(cTeacher);
console.log('Cpp');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Test Java
java.setTeacher(javaTeacher);
console.log('\nJava');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Test React
react.setTeacher(reactTeacher);
console.log('\nReact');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

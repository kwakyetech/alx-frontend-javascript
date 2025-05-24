// Define the Teacher interface
interface Teacher {
  readonly firstName: string;               // Can only be assigned during initialization
  readonly lastName: string;                // Same as above
  fullTimeEmployee: boolean;                // Always required
  yearsOfExperience?: number;               // Optional
  location: string;                         // Always required
  [key: string]: any;                       // Allows any additional dynamic properties
}

// Create an object of type Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra property not declared, but accepted due to index signature
};

console.log(teacher3);


// Extend the Teacher interface with Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// Interface describing the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

"use strict";
// Create two students
const student1 = {
    firstName: 'Prince',
    lastName: 'Ofori',
    age: 24,
    location: 'Accra'
};
const student2 = {
    firstName: 'Ama',
    lastName: 'Mensah',
    age: 22,
    location: 'Kumasi'
};
// Store students in an array
const studentsList = [student1, student2];
// Create table
const table = document.createElement('table');
const headerRow = table.insertRow();
const header1 = headerRow.insertCell();
header1.textContent = 'First Name';
const header2 = headerRow.insertCell();
header2.textContent = 'Location';
// Populate rows
studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
// Add table to document body
document.body.appendChild(table);

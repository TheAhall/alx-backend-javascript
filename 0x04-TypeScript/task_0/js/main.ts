interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Creating the table and appending it to the body
const table = document.createElement('table');
document.body.appendChild(table);

// Adding table headers
const headerRow = table.insertRow();
const firstNameHeader = headerRow.insertCell();
const locationHeader = headerRow.insertCell();
firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

// Adding student data to the table
studentsList.forEach(student => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});


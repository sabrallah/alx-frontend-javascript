// Define a class representing a Holberton school class with a year and location.
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  // Retrieve the year of the Holberton class.
  get year() {
    return this._year;
  }

  // Retrieve the location of the Holberton class.
  get location() {
    return this._location;
  }
}

// Define a class representing a student at Holberton school.
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Retrieve the full name of the student.
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Retrieve the Holberton class instance associated with the student.
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Retrieve a description of the student including their name, class year, and location.
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create instances of HolbertonClass for the years 2019 and 2020 in San Francisco.
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Create instances of StudentHolberton for various students in the 2019 and 2020 classes.
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Compile a list of the student instances.
const listOfStudents = [student1, student2, student3, student4, student5];

// Export the list of students as the default export of this module.
export default listOfStudents;

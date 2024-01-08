// 4-update_grade_by_city.js

/**
 * Updates the grade for students in a specific city based on the provided newGrades.
 * It accepts a list of students, a city, and an array of newGrades as parameters.
 * If a student doesn't have a corresponding grade in newGrades, the final grade is set to 'N/A'.
 *
 * @param {Array} students - Array of student objects with id, firstName, and location attributes.
 * @param {string} city - The city for which the grades should be updated.
 * @param {Array} newGrades - Array of objects with studentId and grade attributes.
 * @returns {Array} - An array of updated student objects with id, firstName, location, and grade attributes.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  // Use filter to get students from the specified city
  const studentsInCity = students.filter(student => student.location === city);

  // Use map to update the grades for students in the specified city
  const updatedStudents = studentsInCity.map((student) => {
    // Find the corresponding new grade for the current student
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Update the grade attribute, or set it to 'N/A' if no new grade is found
    student.grade = newGrade ? newGrade.grade : 'N/A';

    // Return the updated student object
    return student;
  });

  // Return the array of updated students
  return updatedStudents;
}

// Export the function to make it accessible from other modules
export default updateStudentGradeByCity;

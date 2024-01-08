// 4-update_grade_by_city.js

/**
 * Function to update student grade by city
 * @param {Array} students - The list of students
 * @param {String} city - The city to filter by
 * @param {Array} newGrades - The new grades to update
 * @returns {Array} - The updated list of students
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  return students.filter((student) => student.location === city)
    .map((student) => {
      // Find the student's grade
      const grade = newGrades.find((item) => item.studentId === student.id);
      // If grade is not found, set it to 'N/A'
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });
}

// 0-get_list_students.js

/**
 * Returns an array of student objects.
 * Each object has three attributes: id (Number), firstName (String), and location (String).
 * The array contains the following students in order:
 * - Guillaume, id: 1, in San Francisco
 * - James, id: 2, in Columbia
 * - Serena, id: 5, in San Francisco
 *
 * @returns {Array} An array of student objects.
 */
function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

// Exporting the function to make it accessible in other files.
module.exports = getListStudents;

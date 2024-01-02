export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    * [Symbol.iterator]() {
      const departments = Object.values(report.allEmployees);

      while (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];

        if (currentEmployeeIndex < currentDepartment.length) {
          yield currentDepartment[currentEmployeeIndex];
          currentEmployeeIndex += 1;
        } else {
          // Réinitialiser l'index et passer au département suivant
          currentEmployeeIndex = 0;
          currentDepartmentIndex += 1;
        }
      }

      // Réinitialiser les index pour les itérations ultérieures
      currentDepartmentIndex = 0;
      currentEmployeeIndex = 0;
    },
  };
}

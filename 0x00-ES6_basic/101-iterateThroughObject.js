export default function iterateThroughObject(reportWithIterator) {
  // Utiliser la méthode Array.from pour convertir l'itérateur en tableau
  const employeesArray = Array.from(reportWithIterator);

  // Utiliser la méthode join pour concaténer les noms des employés avec '|'
  const result = employeesArray.join(' | ');

  return result;
}

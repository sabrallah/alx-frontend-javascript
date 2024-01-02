export default function taskBlock(trueOrFalse) {
  // Déclaration des variables avec const
  const task = false;
  const task2 = true;

  // Bloc conditionnel avec des variables locales redéclarées (masquées)
  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  // Retourne un tableau avec les valeurs des variables
  return [task, task2];
}

// Fichier : 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Implémentation de la gestion de la réponse de l'API
    // ...
    resolve(/* résultat */); // Résoudre la promesse avec le résultat approprié
    // ou
    // eslint-disable-next-line no-unused-vars
    reject(new Error("Message d'erreur")); // Rejeter la promesse avec une erreur
  });
}

export default getResponseFromAPI;

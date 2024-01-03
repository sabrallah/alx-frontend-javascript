// Fichier : 3-all.js

import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoRespons, userRespons] = results;
      console.log(`${photoRespons.body} ${userRespons.firstName} ${userRespons.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

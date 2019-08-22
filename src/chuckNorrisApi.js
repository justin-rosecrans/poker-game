import React from 'react';

// function getJoke() {
//     fetch('http://api.icndb.com/jokes/random/3')
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (response) {
//         const value = response.value;

//         value.forEach(function(element, i) {
//           document.querySelector('.jokes').insertAdjacentHTML('afterbegin', `<li>${element.joke}</li>`);
//         });
//       })
//       .catch(function(error) {
//         console.error('Request failed - Error: ', error)
//       });
// }

const chuckNorrisApi = async function getJoke() {
  let fetchJoke = {};

  try {
    fetchJoke = await fetch('http://api.icndb.com/jokes/random/3');
  } catch (error) {
    return Promise.reject(error);
  }
  
  const json = await fetchJoke.json();
  const value = json.value;

  value.forEach(function(element, i) {
    document.querySelector('.jokes').insertAdjacentHTML('afterbegin', `<li>${element.joke}</li>`);
  });
}

export default chuckNorrisApi;
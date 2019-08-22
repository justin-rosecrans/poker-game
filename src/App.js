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

async function getCards() {
  let fetchJoke = {};

  try {
    fetchJoke = await fetch('https://deckofcardsapi.com/api/deck/g1swml2iwvv0/draw/?count=5');
  } catch (error) {
    return Promise.reject(error);
  }
  
  const json = await fetchJoke.json();
  const value = json.cards;

  console.log('value', value);

  value.forEach(function(element, i) {
    console.log(element);
    document.querySelector('.jokes').insertAdjacentHTML('afterbegin', `<img src=${element.image} />`);
  });
}

async function getJoke() {
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

function displayJoke() {
  const element = (
    <section>
      <h1>5 card stud poker</h1>
      <span className='jokes'></span>
    </section>
  );

  getCards();

  return element;
}

export default displayJoke;

// Import react JS here.
import React from 'react'
import UnorderedList from './UnorderedList';


class App1 extends React.Component {

  render() {
    return (
      <UnorderedList items= "getData()"> </UnorderedList>
    ); 

    
  }
}



// function getData() {
//     /*
//         Do a ES6 fetch from http://api.icndb.com/jokes/random/3.
//         Then store the data in the a unordered list for each joke.

//         If Chuck Norris API is down, Get cards API:
//         https://deckofcardsapi.com/api/deck/g1swml2iwvv0/draw/?count=3
//     */

//    fetch('https://deckofcardsapi.com/api/deck/g1swml2iwvv0/draw/?count=3')
//    .then(
//      function(response) {
//        if (response.status !== 200) {
//          console.log('Looks like there was a problem. Status Code: ' +
//            response.status);
//          return;
//        }
 
//        // Examine the text in the response
//        response.json().then(function(data) {
//          console.log(data.cards);
//        });
//      }
//    )
//    .catch(function(err) {
//      console.log('Fetch Error :-S', err);
//    });
// }

// function displayJoke() {
//   const element = (
//     <h1 className="header">Play Poker:</h1>
//     <ul>
//       <li ></li>
//     </ul>
//     // create html here for the unordered list
//   );

//   // function call here

//   return element;
// }

export default App1;

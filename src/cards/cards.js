import React, { Component } from 'react';

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            cards: []
        };
    }
}

async function getCards() {
    let getCards = {};
  
    try {
      getCards = await fetch('https://deckofcardsapi.com/api/deck/g1swml2iwvv0/draw/?count=5');
    } catch (error) {
      return Promise.reject(error);
    }
    
    const json = await getCards.json();
    const value = json.cards;
  
    value.forEach(function(element, i) {
      document.querySelector('.hand').insertAdjacentHTML('afterbegin', `<img src=${element.image} />`);
    });
  }
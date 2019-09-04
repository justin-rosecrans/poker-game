import React, { Component } from '../../node_modules/react';
import '../App.css';

class Cards extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      currentCard:[],
      sameValueCounter: 0
    };

    this.getScore = (card) => {
      console.log('array - card', this.state.cards);
      console.log('getScore - card', this.state.currentCard);

      let cards = this.state.cards;
      let cardVal = this.state.currentCard.value;
      let msg = '';

      // Pop last card so we don't duplicate the card for match
      cards.pop();

      cards.forEach((card, i) => {
        if(cardVal === card.value) {
          // console.error('ahhhh!');
          // this.setState((prevState, props) => ({
          //   sameValueCounter: prevState.sameValueCounter += 1
          // }));
          msg = 'Your hand has - Two of a pair';
        } else {
          msg = 'Your hand has - Nothing.';
        }

        console.log('this.state.sameValueCounter', this.state.sameValueCounter)

        // switch(this.state.sameValueCounter) {
        //   case 0:
        //     msg = 'Your hand has - Nothing.';
        //     break;
        //   case 1:
        //     msg = 'Your hand has - Two of a pair';
        //     break;
        //   case 2:
        //     msg = 'Your hand has - Three of a pair';
        //     break;
        //   case 3:
        //     msg = 'Your hand has - Four of a pair';
        //     break;
        //   default:
        //     // code block
        // }
      });

      return msg;

      };

    }

  componentDidMount() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=5')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        let cardsArr = [];

        myJson.cards.forEach((card) => {
          console.log('card', card);
          cardsArr.push(card);

          this.setState({
            currentCard: card
          })
        });

        this.setState({
          cards: cardsArr
        })
      });
  }

  render() {
    const cards = this.state.cards;
    console.log(this);
    return (
      <div>
      <p>
        {cards.map(card =>
          <span>
            <img alt="card" src={card.image} />
          </span>
        )}
      </p>
      <p className='message'>{this.getScore()}</p>
      </div>
    );
  }
}

export default Cards;
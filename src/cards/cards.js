import React, {
  Component
} from '../../node_modules/react';

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
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
          cardsArr.push(card);
        });

        this.setState({
          cards: cardsArr
        })
      });
  }

  render() {
    const cards = this.state.cards;

    return (
      <p>
        {cards.map(card =>
          <span>
            <img alt="card" src={card.image} />
          </span>
        )}
      </p>
    );
  }
}

export default Cards;
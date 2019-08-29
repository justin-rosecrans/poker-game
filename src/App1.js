// Import react JS here.
import React from 'react'
import UnorderedList from './UnorderedList';


class App1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  getData() {
    var that = this;
    fetch('https://deckofcardsapi.com/api/deck/g1swml2iwvv0/draw/?count=5')
    .then(function(response) {
      return response.json();
    }) 
    .then(function(myJson) {
      console.log(myJson);
      that.setState({cards: myJson.cards});
    });
  }

  componentDidMount() {
   console.log('componentDidMount');
   this.getData();
  }

   
  render() {
    return ( 
      <UnorderedList items = {this.state.cards} ></UnorderedList>
    );
  }
}

export default App1;

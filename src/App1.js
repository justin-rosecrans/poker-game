// Import react JS here.
import React from 'react'
import UnorderedList from './UnorderedList';
import DisplayResult from './DisplayResult';


class App1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  getData() {
    var that = this;
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=5')
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
      <div>
      <UnorderedList items = {this.state.cards} ></UnorderedList> 
      <DisplayResult items = {this.state.cards}/>
      </div>
    );
  }
}

export default App1;

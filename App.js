import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  ScrollView, 
  Modal,
  TextInput
} from 'react-native';

/*
  Import our two custom components
*/
import NewCardModal from './NewCardModal';
import Card from './Card';

/*
  Default set of cards
*/
const DEFAULT_CARDS = [
  {
    term: "self-determinism",
    definition: "doctrine that the actions of a self are determined by itself"
  }, 
  {
    term: "underbreath", 
    definition: "subdued voice; rumour"
  }, 
  {
    term: "wyrd", 
    definition: "the personification of fate or destiny"
  }, 
  {
    term: "uranomancy", 
    definition: "divination by studying the heavens"
  }, 
  {
    term: "jugate", 
    definition: "side by side; in pairs; overlapping"
  }
];

class App extends Component {
  // Fill this out
  state = {
    cards: DEFAULT_CARDS, 
    modalVisible: false

  }
 
  /*
    Toggles the new card modal
  */
  _toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  /*
    Passed to the new card modal.
    Called when user decides to add new card.
    Creates card object and adds it to our state
  */
  _addCard = (_term, _definition) => {
    const cards = this.state.cards; 
    cards.push({
      term: _term,
      definition: _definition
    });

    this.setState({
      cards: cards
    });

    this.setState({
      modalVisible: false
    });
  }

  render() {
    // Loop through the cards array in state and create Card component for each card
    const cards = this.state.cards.map((card, index) => {
      return (
        <Card cardData = {card} key = {index} />
      )
    });

    return (
      <View style={styles.container}>
        <NewCardModal 
            modalVisible={this.state.modalVisible} 
            toggleModal={this._toggleModal}
            addCard={this._addCard}
         />
        <ScrollView> 
          {cards}
        </ScrollView> 
        <TouchableHighlight 
          style={styles.addButton} 
          onPress={this._toggleModal} 
          underlayColor='#2042a6'
        >
        	<Text style={styles.addButtonText}>Add Card</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  addButton: {
    backgroundColor: '#007aff',
    paddingTop: 20,
    paddingBottom: 20
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20
  }
});

export default App;
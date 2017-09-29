import React from 'react';
import FlipCard from 'react-native-flip-card'; 
import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  TouchableWithoutFeedback 
} from 'react-native';

export default class Card extends React.Component {
  // state = {
  //   showTerm: false
  // }

  /*
    Flips the showTerm flag in our state
  */
  // flipCard = () => {

  //   this.setState({
  //     showTerm: !this.state.showTerm
  //   }); 
  // }

  render() {


    // const textStyle = (this.state.showTerm) ? (styles.termText) : (styles.definitionText);
    return (

     //  <TouchableWithoutFeedback onPress={this.flipCard}>
     //    <View style={[styles.container]}>
     //      <Text style={styles.cardTitle}>{(this.state.showTerm) ? ("Term") : ("Definition")}</Text>
     //      <Text style={textStyle}>{(this.state.showTerm) ? (this.props.cardData.term) : (this.props.cardData.definition)}</Text>
     //    </View>
     // </TouchableWithoutFeedback>
      
      
      <FlipCard
        perspective={500}
        friction={6}
        flipHorizontal={true}
        flipVertical={false}
      >
       {/* Face Side */}
        <View style = {[styles.container]}>
          <Text style={styles.cardTitle}>{"Definition"}</Text>
          <Text style={styles.definitionText}>{this.props.cardData.definition}</Text>
        </View>
        {/* Back Side */}
          <View style = {[styles.container]}>
          <Text style={styles.cardTitle}>{"Term"}</Text>
          <Text style={styles.termText}>{this.props.cardData.term}</Text>
        </View>
      </FlipCard>

    );
    // Fill this out
  } 
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: -2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    padding: 20,
    height: 200, 
  }, 
  cardTitle: {
    color: '#7f8c8d',
    fontSize: 18,
    position: 'absolute',
    left: 20,
    top: 20
  },
  termText: {
    fontSize: 50,
    fontWeight: '500', 
    color: '#2042a6'
  },
  definitionText: {
    fontSize: 30,
    color: '#007aff'
  }
}); 
import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

class HomeView extends Component {
  render() {
    //const handlePress = () => false;
    return (
      <View style={styles.MainContainer}>
        <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          Hi sumit , how are you ?
        </Text>
      </View>
    );
  }
}

export default HomeView;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

    // Set content's vertical alignment.
    justifyContent: 'center',

    // Set content's horizontal alignment.

    // Set hex color code here.
    backgroundColor: '#FFEB3B',
  },
});

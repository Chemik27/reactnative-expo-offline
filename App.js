import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './store';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    isLoading: true,
    store: configureStore(() => this.setState({ isLoading: false })),
  };

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>ABInBev</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

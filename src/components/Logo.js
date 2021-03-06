//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

// create a component
class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        enabled
        style={styles.container}
      >
        <Image
          style={{ width: 120, height: 120, marginTop: 100 }}
          source={require('../../images/HSLogo.jpg')}
        />
      </KeyboardAvoidingView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  logoText: {
    fontFamily: 'GT-Walsheim-Regular',
    marginVertical: 15,
    fontSize: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 0
  }
});

//make this component available to the app
export default Logo;

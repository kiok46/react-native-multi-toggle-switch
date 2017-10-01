import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MultiToggleSwitch from 'react-native-multi-toggle-switch';


export default class MultiToggle extends Component {
  render() {

    return (
      <View style={styles.container}>
	    <MultiToggleSwitch>
		  <MultiToggleSwitch.Item iconName={'facebook'} onPress={() => console.log("Facebook tapped!")}/>
		  <MultiToggleSwitch.Item iconName={'twitter'}/>
		  <MultiToggleSwitch.Item iconName={'instagram'} />
		  <MultiToggleSwitch.Item iconName={'github'}/>
		</MultiToggleSwitch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888',
  },

});

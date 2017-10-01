import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MultiToggleSwitch from 'react-native-multi-toggle-switch';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class MultiToggle extends Component {
  render() {

    return (
      <View style={styles.container}>
          <MultiToggleSwitch>
            <MultiToggleSwitch.Item onPress={() => console.log("Facebook tapped!")}>
                <Icon name={'facebook'} size={30} color={this.props.active ? this.props.secondaryColor : this.props.primaryColor}
                />
            </MultiToggleSwitch.Item>
            <MultiToggleSwitch.Item>
                <Icon name={'twitter'} size={30} color={this.props.active ? this.props.secondaryColor : this.props.primaryColor}
                />
            </MultiToggleSwitch.Item>
            <MultiToggleSwitch.Item>
                <Icon name={'instagram'} size={30} color={this.props.active ? this.props.secondaryColor : this.props.primaryColor}
                />
            </MultiToggleSwitch.Item>
            <MultiToggleSwitch.Item>
                <Icon name={'github'} size={30} color={this.props.active ? this.props.secondaryColor : this.props.primaryColor}
                />
            </MultiToggleSwitch.Item>
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

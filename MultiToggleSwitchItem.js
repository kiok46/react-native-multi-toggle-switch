import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';


export default class MultiToggleSwitchItem extends Component {
    constructor(props) {
      super(props)
    }

	render(){

		return(
			  <TouchableOpacity
				style={[this.props.itemContainer ,this.props.active === true ? this.props.activeContainerStyle: undefined, this.props.active === true ? {backgroundColor: this.props.primaryColor}: undefined ]}
				onPress={() => this.props.onPress()}
			  >
				  <Icon name={this.props.iconName} size={30} color={this.props.active ? this.props.secondaryColor : this.props.primaryColor}
				  />
			  </TouchableOpacity>
		)
    }
}


MultiToggleSwitchItem.defaultProps = {
	active: false,
	elevate: false,
	iconName: undefined,
	primaryColor: '#124E96',
	secondaryColor: 'white',
	onPress: () => {},
}

MultiToggleSwitchItem.propTypes = {
	active: PropTypes.bool,
	elevate: PropTypes.bool,
	iconName: PropTypes.string,
	primaryColor: PropTypes.string,
	secondaryColor: PropTypes.string,
	itemContainer: View.propTypes.style,
	activeContainerStyle: View.propTypes.style,
	onPress: PropTypes.func,
}

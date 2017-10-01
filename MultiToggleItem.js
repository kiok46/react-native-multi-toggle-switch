import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';


export default class MultiToggleItem extends Component {
    constructor(props) {
      super(props)
    }

	render(){

		return(
			  <TouchableOpacity
				style={[this.props.iconContainer ,this.props.active === true ? this.props.activeContainerStyle: undefined, this.props.active === true ? {backgroundColor: this.props.primaryColor}: undefined ]}
				onPress={() => this.props.onPress()}
			  >
				  <Icon name={this.props.iconName} size={30} color={this.props.active ? this.props.secondaryColor : this.props.primaryColor}
				  />
			  </TouchableOpacity>
		)
    }
}


MultiToggleItem.defaultProps = {
	active: false,
	elevate: false,
	iconName: undefined,
	primaryColor: '#124E96',
	secondaryColor: 'white',
	iconContainer: {
	  padding: 10,
	  backgroundColor: 'white',
	  marginLeft: 5,
	  marginRight: 5,
	  height: 50,
	  width: 50,
	  alignItems: 'center',
	  justifyContent: 'center',
	  borderRadius: 30,
	},
	activeContainerStyle: {
	  backgroundColor: 'red',
	  height: 80,
	  width: 80,
	  marginTop: -14,
	  marginBottom: 2,
	  borderRadius: 40,
	  elevation: 7,
      shadowOpacity: 0.0015 * 7 + 0.18,
      shadowRadius: 0.54 * 7,
      shadowOffset: {
        height: 0.6 * 7,
      },
	},
	onPress: () => {},
}

MultiToggleItem.propTypes = {
	active: PropTypes.bool,
	elevate: PropTypes.bool,
	iconName: PropTypes.string,
	primaryColor: PropTypes.string,
	secondaryColor: PropTypes.string,
	iconContainer: View.propTypes.style,
	activeContainerStyle: View.propTypes.style,
	onPress: PropTypes.func,
}

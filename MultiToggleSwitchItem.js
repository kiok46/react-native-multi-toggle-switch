import React, { Component } from 'react';
import {
    ViewPropTypes,
    StyleSheet,
    Text,
	TouchableOpacity,
} from 'react-native';
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
                 {React.cloneElement(this.props.children, { color: this.props.active ? this.props.secondaryColor : this.props.primaryColor })}
			  </TouchableOpacity>
		)
    }
}


MultiToggleSwitchItem.defaultProps = {
	active: false,
	iconName: undefined,
	primaryColor: '#124E96',
	secondaryColor: 'white',
	onPress: () => {},
}

MultiToggleSwitchItem.propTypes = {
	active: PropTypes.bool,
	iconName: PropTypes.string,
	primaryColor: PropTypes.string,
	secondaryColor: PropTypes.string,
	itemContainer: ViewPropTypes.style,
	activeContainerStyle: ViewPropTypes.style,
	onPress: PropTypes.func,
}

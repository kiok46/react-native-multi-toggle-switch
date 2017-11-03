import React, { Component } from 'react';
import {
    View,
		ViewPropTypes,
    StyleSheet,
    Text,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import MultiToggleSwitchItem from './MultiToggleSwitchItem';


export default class MultiToggleSwitch extends Component {
    constructor(props) {
      super(props)
	  this.state = {
		  activeIdx: this.props.defaultActiveIndex
	  }
    }

	setActiveIndex = (idx) => {
		this.setState({ activeIdx: idx })
	}


	renderToggleItems = () => {
		const { children } = this.props;
		const toggleButtons = !Array.isArray(children) ? [children] : children;


		return (
			<View style={this.props.itemsContainer} pointerEvents={"box-none"}>
				{toggleButtons.map((MultiToggleSwitch, idx) => (
					<MultiToggleSwitchItem
					    key={idx}
                        {...this.props}
                        {...MultiToggleSwitch.props}
						active={ idx === this.state.activeIdx ? true : false}
						onPress={() => {
							this.setActiveIndex(idx)
							MultiToggleSwitch.props.onPress()
						}}
					/>
				))}
			</View>
		)

	}

	render(){
		return(
	          <View style={{backgroundColor: 'transparent', marginTop: 10}}>
			  		<View style={[this.props.itemsContainerBackgroundStyle, {width: (50+15)*this.props.children.length}]}/>
					{this.renderToggleItems()}
	          </View>
		)
    }
}


MultiToggleSwitch.Item = MultiToggleSwitchItem;

MultiToggleSwitch.defaultProps = {
	defaultActiveIndex: 0,
	primaryColor: 'red',
	secondaryColor: 'white',
    itemContainer: {
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
	itemsContainer: {
	  flexDirection: 'row',
	  paddingTop: 15,
	},
	itemsContainerBackgroundStyle: {
		position: 'absolute',
		height: 50,
		marginTop: 15,
		marginLeft: 5,
		borderRadius: 30,
		backgroundColor: 'white'
	},
	onPress: () => {},
}

MultiToggleSwitch.propTypes = {
	defaultActiveIndex: PropTypes.number,
	primaryColor: PropTypes.string,
	secondaryColor: PropTypes.string,
	itemContainer: ViewPropTypes.style,
	activeContainerStyle: ViewPropTypes.style,
	itemsContainer: ViewPropTypes.style,
	itemsContainerBackgroundStyle: ViewPropTypes.style,
	onPress: PropTypes.func,
}

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import MultiToggleItem from './MultiToggleItem';


export default class MultiToggle extends Component {
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
			<View style={this.props.iconsContainer} pointerEvents={"box-none"}>
				{toggleButtons.map((MultiToggle, idx) => (
					<MultiToggleItem
					    key={idx}
						active={ idx === this.state.activeIdx ? true : false}
						primaryColor={MultiToggle.props.primaryColor}
						secondaryColor={MultiToggle.props.secondaryColor}
						iconName={MultiToggle.props.iconName}
						iconContainer={MultiToggle.props.iconContainer}
						activeContainerStyle={MultiToggle.props.activeContainerStyle}
						onPress={() => {
							this.setActiveIndex(idx)
							MultiToggle.props.onPress()
						}}
					/>
				))}
			</View>
		)

	}

	render(){
		return(
	          <View style={{backgroundColor: 'transparent', marginTop: 10}}>
			  		<View style={[this.props.iconsContainerBackgroundStyle, {width: (50+15)*this.props.children.length}]}/>
					{this.renderToggleItems()}
	          </View>
		)
    }
}


MultiToggle.Item = MultiToggleItem;

MultiToggle.defaultProps = {
	defaultActiveIndex: 0,
	primaryColor: 'red',
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
	  marginTop: -15,
	  borderRadius: 40
	},
	iconsContainer: {
	  flexDirection: 'row',
	  paddingTop: 15,
	},
	iconsContainerBackgroundStyle: {
		position: 'absolute',
		height: 50,
		marginTop: 15,
		marginLeft: 5,
		borderRadius: 30,
		backgroundColor: 'white'
	},
	onPress: () => {},
}

MultiToggle.propTypes = {
	defaultActiveIndex: PropTypes.number,
	primaryColor: PropTypes.string,
	secondaryColor: PropTypes.string,
	iconContainer: View.propTypes.style,
	activeContainerStyle: View.propTypes.style,
	iconsContainer: View.propTypes.style,
	iconsContainerBackgroundStyle: View.propTypes.style,
	onPress: PropTypes.func,
}

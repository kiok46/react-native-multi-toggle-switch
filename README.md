# react-native-multi-toggle-switch
MultiToggle Switch for React-Native


<img src="https://user-images.githubusercontent.com/7335120/31056186-631985f0-a6eb-11e7-9436-08cb48804036.gif" width="350">
<img src="https://user-images.githubusercontent.com/7335120/31056187-6414462a-a6eb-11e7-93ef-7420275b33d6.gif" width="350">


### Installation
```
npm i react-native-multi-toggle-switch --save
```
Link `react-native-vector-icons` native dependencies to your project with:
```
react-native link react-native-vector-icons
```
or just:
```
react-native link
```


## Usage


**First step:** import the component:

```
import MultiToggleSwitch from 'react-native-multi-toggle-switch';
```

**Second step:** Use it.

```
<MultiToggleSwitch>
  <MultiToggleSwitch.Item iconName={'facebook'} onPress={() => console.log("Facebook tapped!")}/>
  <MultiToggleSwitch.Item iconName={'twitter'}/>
  <MultiToggleSwitch.Item iconName={'instagram'} />
  <MultiToggleSwitch.Item iconName={'github'}/>
</MultiToggleSwitch>
```


## API


| Property     | Type     | Default               | Description                                                                                                |
|--------------|----------|-----------------------|------------------------------------------------------------------------------------------------------------|
| defaultActiveIndex      | number    | 0                    | Item index which should be active when the component renders                                                         |
| primaryColor  | string   | #124E96               | Color of icon when in non-active state & Color of icon background when in active state                                                                                 |
| secondaryColor      | string  | white                  | Color of icon when in active state & Color of icon background when in non-active state                                                                                   |
| itemContainer | style   | null | Style of item container                                                                             |
| activeContainerStyle | style   | null | Style of item container when active                                                                            |
| itemsContainer | style   | null | Style of container containing all items                                                                            |
| itemsContainerBackgroundStyle | style   | null | Background Style of container containing items                                                                             |
| onPress  | function |                       | Function to be called as soon as the user presses any item  |


## TODO

- [x] Example
- [ ] Able to use all icons(only FontAwesome Supported)

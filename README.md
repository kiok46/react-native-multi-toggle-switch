# react-native-multi-toggle-switch
MultiToggle Switch for React-Native


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
import { MultiToggle } from 'react-native-multi-toggle-switch';
```

**Second step:** Use it.

```
<MultiToggle>
  <MultiToggle.Item iconName={'facebook'} onPress={() => console.log("Facebook tapped!")}/>
  <MultiToggle.Item iconName={'twitter'}/>
  <MultiToggle.Item iconName={'instagram'} />
  <MultiToggle.Item iconName={'github'}/>
</MultiToggle>
```


## TODO

- [ ] Example
- [ ] Able to use all icons(only FontAwesome Supported)

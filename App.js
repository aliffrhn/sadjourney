import React, {Component} from 'react'

import { RadioButton } from 'react-native-paper'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import SigninContainer from './signinContainer.js'
import SignupContainer from './signupContainer.js'
import HomeContainer from './homeContainer.js'
import DetailTrending from './detailTrending'
import CategoriesContainer from './categoriesContainer'

export default class App extends Component{
  
  state = {
    checked: 'first',
  };

  render(){

    return(
      <AppContainer />
    )
  }

}

const Botnav = createMaterialBottomTabNavigator({
  la: { screen: CategoriesContainer }
}, {
  initialRouteName: 'la',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fff' },
});

const Home = createStackNavigator(
  {
    HomeC: {
      screen: HomeContainer,
      navigationOptions: {
        header: null
      },
    },
    DetailT: {
      screen: DetailTrending,
      navigationOptions: {
        headerStyle: {
          elevation: 0, // remove shadow on Android
        } 
      },
    },
  },
  {
    initialRouteName: 'HomeC',
  },
  
);

const RootStack = createSwitchNavigator(
  {
    Signup: DetailTrending,
    Signin: SigninContainer,
    Home: Home
  },
  {
    initialRouteName: 'Signup',
  }
);

const AppContainer = createAppContainer(Botnav);

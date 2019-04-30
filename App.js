import React, {Component} from 'react'

import { RadioButton } from 'react-native-paper'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'

import SigninContainer from './signinContainer.js'
import SignupContainer from './signupContainer.js'

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

const RootStack = createSwitchNavigator(
  {
    Signup: SignupContainer,
    Signin: SigninContainer
  },
  {
    initialRouteName: 'Signup',
  }
);

const AppContainer = createAppContainer(RootStack);

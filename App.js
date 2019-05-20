import React, {Component} from 'react'

import { RadioButton } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import SigninContainer from './Container/signinContainer'
import SignupContainer from './Container/signupContainer'
import HomeContainer from './Container/homeContainer'
import DetailTrending from './Container/detailTrending'
import CategoriesContainer from './Container/categoriesContainer'

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
  Home: { screen: HomeContainer},
  Categories: { screen: CategoriesContainer},

},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `md-home`;
      } else if (routeName === 'Categories') {
        iconName = `md-compass`;
      } else if (routeName === '') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      } else if (routeName === '') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      }
      return <IconComponent name={iconName} size={27} color={tintColor} />;
    },
  }),
  initialRouteName: 'Home',
  activeColor: '#72a6fd',
  inactiveColor: '#bbbbbb',
  barStyle: { 
    backgroundColor : '#ffffff'
  },
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

const AppContainer = createAppContainer(Botnav)

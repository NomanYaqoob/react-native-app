import { StackNavigator } from 'react-navigation';
import { LoginContainer } from '../containers';
import { DashboardContainer } from '../containers';
import { Platform, StatusBar } from 'react-native';
import { SignedNavigator } from './signedState';

export const UnSignedNavigator = StackNavigator({
  Login: { screen: LoginContainer },
  Main:
    {
      screen: SignedNavigator
    }
}, {
    headerMode: 'none',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      backgroundColor: 'white'
    },

  });

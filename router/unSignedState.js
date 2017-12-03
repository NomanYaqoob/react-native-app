import { StackNavigator } from 'react-navigation';
import { LoginContainer } from '../containers';


const UnSignedNavigator = StackNavigator({
  Login: { screen: LoginContainer }
}, {
    headerMode: 'none',
    mode: 'modal'
  });

export default UnSignedNavigator;
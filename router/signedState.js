import { StackNavigator } from 'react-navigation';
import { DashboardContainer } from '../containers';


const SignedNavigator = StackNavigator({
  Dashboard: { screen: DashboardContainer },
});

export default SignedNavigator;
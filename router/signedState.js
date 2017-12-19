import { DrawerNavigator } from 'react-navigation';
import { DrawerContent } from '../utilities';
import { DashboardNavigator } from './DashboardNavigator';
import { ExtraContainer } from '../containers';
export const SignedNavigator = DrawerNavigator({
  Home: { screen: DashboardNavigator },
  Extra: { screen: ExtraContainer }
},
  {
    contentComponent: DrawerContent,
    drawerBackgroundColor: 'rgba(0,0,0,.55)',
    contentOptions: {
      activeBackgroundColor: '#f6d42e',
      activeTintColor: '#000000',
      inactiveTintColor: '#ffffff'
    }
  });

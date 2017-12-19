import { StackNavigator } from 'react-navigation';
import { DashboardContainer, ItemDetailContainer, MenuContainer } from '../containers';
import { Icon } from 'native-base';
import React from 'react';
import { NavigationActions } from 'react-navigation';

export const DashboardNavigator = StackNavigator({
  Dashboard: { screen: DashboardContainer },
  Detail: { screen: ItemDetailContainer },
  Menu: { screen: MenuContainer }
}, {
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="menu"
        style={{ marginLeft: 20 }} size={35}
        onPress={() => navigation.navigate('DrawerOpen')} />,
      headerRight: <Icon name="ios-log-out"
        style={{ marginRight: 20 }} size={35}
        onPress={() => resetNavigator(navigation)} />,
    })
  }
);

const resetNavigator = (navigation) => {
  const navigationAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Login' })
    ]
  });
  navigation.dispatch(navigationAction);
}
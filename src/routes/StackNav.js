import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../pages/Login';
import DrawerNav from './DrawerNav';

const StackNav = createAppContainer(
  createStackNavigator(
    {
      Login,
      Home: {
        screen: DrawerNav,
      },
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default StackNav;

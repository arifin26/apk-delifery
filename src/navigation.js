import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeMenuView from './home';
import app from './popularfood';
import Login from './login';
import ThemeDemo from './tema';
import App from './rating';
import Register from './register';
import Setting from './setting';
import Promo from './promo';
import Profile from './profil';

const Route = createStackNavigator ({
  login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  register: {
    screen: Register,
    navigationOptions: () => ({
      header: null,
    }),
  },
  home: {
    screen: HomeMenuView,
    navigationOptions: () => ({
      header: null,
    }),
  },
  popular: {
    screen: app,
    navigationOptions: () => ({
      header: null,
    }),
  },
  tema: {
    screen: ThemeDemo,
    navigationOptions: () => ({
      header: null,
    }),
  },
  rating: {
    screen: App,
    navigationOptions: () => ({
      header: null,
    }),
  },
  setting: {
    screen: Setting,
    navigationOptions: () => ({
      header: null,
    }),
  },
  promo: {
    screen: Promo,
    navigationOptions: () => ({
      header: null,
    }),
  },
  profil: {
    screen: Profile,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default createAppContainer (Route);

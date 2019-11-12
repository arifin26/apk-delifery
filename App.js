import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Route from './src/navigation';

export default class NJaal extends React.Component {
  state = {
    role: true,
  };

  render () {
    setTimeout (() => {
      this.setState ({
        role: false,
      });
    }, 2000);
    if (this.state.role) {
      return (
        <View style={{flex: 1}}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />

          <View style={{alignItems: 'center', paddingTop: 70}}>
            <Image
              source={require ('./gambar/motor.png')}
              style={{height: 150, width: 150}}
            />
            <ActivityIndicator size="large" />
            <View style={{alignItems: 'center'}} />
          </View>

        </View>
      );
    }

    return <Route />;
  }
}

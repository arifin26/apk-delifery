
import React,{Component}from 'react';
import Theme from 'react-native-theming';
import { View, Text,StatusBar } from 'react-native';
import { createTheme } from 'react-native-theming'



const themes = [
    createTheme({
      backgroundColor: 'white',
      textColor: 'black',
      buttonColor: 'blue',
      buttonText: 'white',
      icon: require('../gambar/icons8-moon-and-stars-48.png'),
      statusBar: 'dark-content',
    }, 'Light'),
    createTheme({
      backgroundColor: 'black',
      textColor: 'white',
      buttonColor: 'yellow',
      buttonText: 'black',
      icon: require('../gambar/icons8-sun-48.png'),
      statusBar: 'light-content',
    }, 'Dark'),
  ];

  import { createStyle } from 'react-native-theming';

  const styles = createStyle({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '@backgroundColor',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '@textColor',
    },
    instructions: {
      textAlign: 'center',
      color: '#888',
      marginBottom: 5,
    },
    button: {
      margin: 10,
      padding: 10,
      backgroundColor: '@buttonColor',
      borderRadius: 3,
      flex: 1,
      alignItems: 'center',
    },
  });

import { createThemedComponent } from 'react-native-theming';
import {TouchableOpacity} from 'react-native';
 
const Button = createThemedComponent(TouchableOpacity);
const Bar = createThemedComponent(StatusBar, ['barStyle', 'backgroundColor']);


export default class ThemeDemo extends Component {
    render() {
      return (
        <Theme.View style={styles.container}>
          <Bar barStyle="@statusBar" backgroundColor="@backgroundColor" />
          <Theme.Image source="@icon" />
          <Theme.Text style={styles.welcome}>
            React Native Theming Demo!
          </Theme.Text>
          <Theme.Text style={styles.instructions}>
            To experiment check app.js file
          </Theme.Text>
          <Text style={styles.instructions}>
            You can now create your themes using JSON. The styles declaration
            is directly compatible with StyleSheet.create. You just need to
            replace `StyleSheet.create` with `createStyle` and add your theme
            variables in the styles.
          </Text>
          <View style={{ flexDirection: 'row' }}>
            { themes.map(theme => (
              <Button key={theme.name} style={styles.button} onPress={() => theme.apply()}>
                <Theme.Text style={{ color: '@buttonText' }}>{theme.name}</Theme.Text>
              </Button>
              ))
            }
          </View>
        </Theme.View>
      );
    }
  }
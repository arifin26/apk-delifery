import React from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Modal,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

const {width: WIDTH} = Dimensions.get ('window');

class Login extends React.Component {
  state = {
    isLoading: false,
    name: '',
    nama: '',
    email: '',
    password: '',
    modalVisible: false,
  };
  //   componentDidMount () {
  //     AsyncStorage.getItem('access_token').then(value => {
  //       if (value != null) {
  //         this.props.navigation.navigate('First')
  //       }
  //     })
  //   }

  Login = (name, password) => {
    this.setState ({modalVisible: true});
    fetch ('', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        name: name,
        password: password,
      }),
    })
      .then (response => response.json ())
      .then (response => {
        if (response.access_token) {
          AsyncStorage.setItem ('name', response.user.name);
          AsyncStorage.setItem ('email', response.user.email);
          AsyncStorage.setItem ('telp', response.user.telp);
          AsyncStorage.setItem ('avatar', response.user.avatar);
          AsyncStorage.setItem ('access_token', response.access_token);
          // AsyncStorage.setItem('name',response.user.name)
        } else if (response.user.email) {
          console.log (response.user.email);
        }

        this.setState ({modalVisible: false});
      })
      .catch (error => {
        console.log (error);
        alert ('error');
        this.setState ({modalVisible: false});
      });
  };
  render () {
    let {name, password} = this.state;
    return (
      <ImageBackground
        source={require ('../gambar/9b613327-ee16-4fd3-bf26-f84c109a3704.jpeg')}
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <View style={{flex: 1}}>
          <StatusBar backgroundColor="#696969" barStyle="light-content" />
          <ScrollView>

            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
            >
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    height: 300,
                    width: 300,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ActivityIndicator size="large" />
                </View>
              </View>
            </Modal>

            {/* <View style={Styles.ViewHeader}>
          <Text style={Styles.TextHeader}> LOGIN </Text>
        </View> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 30,
              }}
            >
              <Image
                source={require ('../gambar/motor.png')}
                style={{height: 140, width: 140}}
              />
            </View>
            <View style={{marginHorizontal: 100}} />

            <View style={Styles.ViewDisplay}>

              <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.name}
                placeholder="name"
                onChangeText={teks => this.setState ({name: teks})}
              />
              <View style={{marginTop: 5}}>
                <TextInput
                  style={Styles.TextInputDisplay2}
                  value={this.state.password}
                  placeholder="password"
                  onChangeText={teks => this.setState ({password: teks})}
                  secureTextEntry
                />
              </View>

            </View>

            <View
              style={{
                flex: 1,
                paddingLeft: 237,
                position: 'absolute',
                paddingTop: 329,
              }}
            >
              <TouchableOpacity
                style={Styles.TouchableDisplay}
                loading={true}
                onPress={() => this.props.navigation.navigate ('home')}
              >

                <View style={{paddingRight: 20}}>
                  <Image
                    source={require ('../gambar/next.png')}
                    style={{height: 80, width: 80}}
                  />

                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: 'center',
              }}
            >

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate ('register')}
                style={Styles.TouchableDisplay2}
              >
                <Text style={Styles.TextHeader}>REGISTER</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>

      </ImageBackground>
    );
  }
}
export default Login;

const Styles = StyleSheet.create ({
  ViewHeader: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#633689',
    elevation: 10,
  },
  TextHeader: {
    fontSize: 18,
    color: '#dc143c',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ViewDisplay: {
    marginBottom: '15%',
    marginTop: 126,
  },
  TextDisplay: {
    marginBottom: '10%',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: 'bold',
    width: WIDTH - 35,
  },
  TextInputDisplay: {
    textAlign: 'center',
    width: '90%',

    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
  },

  TextInputDisplay2: {
    textAlign: 'center',
    width: '90%',
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderBottomRightRadius: 50,
  },
  TextUnderTextInput: {
    width: WIDTH - 30,
    paddingLeft: 23,
    fontSize: 11,
    fontStyle: 'italic',
    color: '#dc143c',
    textAlign: 'center',
  },
  TouchableDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    paddingLeft: 40,
  },

  TouchableDisplay2: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: 40,
    width: '40%',
    marginTop: 140,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  },
  TextUnderTouchDisplay: {
    color: '#fff',
    fontSize: 10,
  },
  TextMaker: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: '2%',
    marginLeft: '55%',
    color: '#a9a9a9',
  },
});

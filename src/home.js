import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
  Modal
} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Theme from 'react-native-theming';
import Star from 'react-native-star-view'
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

const Styles = createStyle({
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

const Button = createThemedComponent(TouchableOpacity);
const Bar = createThemedComponent(StatusBar, ['barStyle', 'backgroundColor']);
 

export default class HomeMenuView extends Component {
  constructor(props){
    super(props)
    this.state={
      isloading:false
    }}

    
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
 
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.screen}>
        <ImageBackground source={require('../gambar/background.png')} style={{height:'100%',width:'100%'}}>

        <StatusBar backgroundColor='#ffd700' barStyle="dark-content"/>
       
           <View style={styles.Search}>
           <View style={{marginRight:40}}>
           <Menu
          ref={this.setMenuRef}
          button={<TouchableOpacity onPress={this.showMenu}> 
          <Image source={require('../gambar/list.png')} style={{height:30,width:30}}/>
          </TouchableOpacity>}
        >
          <MenuItem onPress={() => this.props.navigation.navigate('setting')}>setting</MenuItem>
          <MenuItem onPress={() => {(this.setState({isloading:true}))}}>tema</MenuItem>
          <MenuItem onPress={this.hideMenu}>logout</MenuItem>
          <MenuDivider />
          
          
        </Menu>
        </View>
            <View style={{alignSelf:'center'}}>
            <Text style={{color:'#000',fontSize:22,fontWeight:'bold'}}>
            rifin delivery
            </Text>
            </View>
            <View style={{marginLeft:90}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('profil')}>
            <Image source={require('../gambar/Tzuyu❤️.jpeg')} style={{height:30,width:30,borderRadius:30}}/>
            </TouchableOpacity>
            </View>
       
            </View>


          
  <View style={{flexDirection:'row'}}>
  <ScrollView horizontal={true}>
  
  <TouchableOpacity style={styles.TouchableOpacity} >
            <View style={{flexDirection:'row'}}>
          <Image source={require('../gambar/image(4).png')} style={styles.gambar}/>
          <View style={{marginTop:70,marginLeft:10,flexDirection:'column'}}>
          <Text>good rating:</Text>
          <Star score={4} style={styles.starStyle}/>
          </View>
          </View>
   </TouchableOpacity>
   <TouchableOpacity style={styles.TouchableOpacity} >
                    
   <View style={{flexDirection:'row'}}>
          <Image source={require('../gambar/contoh1.jpeg')} style={styles.gambar}/>
          <View style={{marginTop:80,marginLeft:10}}>
          <Star score={3} style={styles.starStyle}/>
          </View>
          </View>
                  
   </TouchableOpacity>
   <TouchableOpacity style={styles.TouchableOpacity} >
                    
   <View style={{flexDirection:'row'}}>
          <Image source={require('../gambar/contoh2.png')} style={styles.gambar}/>
          <View style={{marginTop:80,marginLeft:10}}>
          <Star score={5} style={styles.starStyle}/>
          </View>
          </View>


   </TouchableOpacity>
   <TouchableOpacity style={styles.TouchableOpacity} >
                    
   <View style={{flexDirection:'row'}}>
          <Image source={require('../gambar/contoh3.jpeg')} style={styles.gambar}/>
          <View style={{marginTop:80,marginLeft:10}}>
          <Star score={1} style={styles.starStyle}/>
          </View>
          </View>
                  
   </TouchableOpacity>
   
   </ScrollView>
          </View>
          


          <View style={styles.texthome}>
          <View style={styles.texthome2}>
        <Text style={{fontSize:22,fontWeight:'bold',color:'#000',}}>
          Home
        </Text>
        <View style={styles.gambartexthome}>
        <Image source={require('../gambar/bell.png')} style={{height:22,width:22,}}/>
        </View>
        </View>
      </View>
        <ScrollView>
      <View style={styles.container}>

        <View style={styles.menuBox}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('popular')}>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
           
        <View style={styles.apik}>
      
          <Image style={styles.icon} source={require('../gambar/fire.png')}/>

          <Text style={styles.info}>populer</Text>
         
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('promo')}>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
          <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/promotions.png')}/>
          <Text style={styles.info}>promo</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('rating')}>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/maps-and-flags.png')}/>
          <Text style={styles.info}>terdekat</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require("../gambar/snack.png")}/>
          <Text style={styles.info}>maknanan ringan</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/store.png')}/>
          <Text style={styles.info}>restoran</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/herbal.png')}/>
          <Text style={styles.info}>herba</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/cup-cake.png')}/>
          <Text style={styles.info}>kue</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/cocoa.png')}/>
          <Text style={styles.info}>minuman hangat</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/juice.png')}/>
          <Text style={styles.info}>minuman dingin</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/crab.png')}/>
          <Text style={styles.info}>sea food</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          <TouchableOpacity>
        <Image source={require('../gambar/vector.jpeg')} style={{height:158,width:338,opacity:0.2,backgroundColor:'#ffd700',borderRadius:20}}/>
        <View style={styles.apik}>
          <Image style={styles.icon} source={require('../gambar/icons8-hamburger-96.png')}/>
          <Text style={styles.info}>siap saji</Text>
          </View>
        </TouchableOpacity>
        </View>
      
      </View>
      </ScrollView>
  


      <Modal
      animationType="slide"
                    transparent={true}
                    visible={this.state.isloading}>
      
      <View style={{height:400,width:360}}>
      <TouchableOpacity onPress={() => { 
                       (this.setState({isloading :false})) }}>
                    <View style={{paddingLeft:130,paddingTop:10}}>
                      <Image source={require('../gambar/exit.png')} style={{height:33,width:33}}/>
                    </View>
                    </TouchableOpacity>
        <Theme.View style={Styles.container}>
          <Bar barStyle="@statusBar" backgroundColor="@backgroundColor" />
          <Theme.Image source="@icon" />
          <Theme.Text style={Styles.welcome}>
            React Native Theming Demo!
          </Theme.Text>
          <Theme.Text style={Styles.instructions}>
            To experiment check app.js file
          </Theme.Text>
          <Text style={Styles.instructions}>
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
        </View>
        </Modal>

        
      <ActionButton buttonColor="#ff1493"  >
          <ActionButton.Item  buttonColor='#ff1493'  title="New Task" onPress={() => console.log("notes tapped!")}>
            <Image source={require('../gambar/get-money.png')} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#ff1493' title="Notifications" onPress={() => {}}>
            <Image source={require('../gambar/product.png')} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#ff1493' title="All Tasks" onPress={() => {}}>
            <Image source={require('../gambar/question.png')} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#ff1493' title="All Tasks" onPress={() => {}}>
            <Image source={require('../gambar/meal.png')} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#ff1493' title="All Tasks" onPress={() => {}}>
            <Image source={require('../gambar/shopping-cart.png')} style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        

        </ImageBackground>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        height:50,
        width:'100%',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40

    },
    texthome:{
        height:60,
        width:'100%',
        justifyContent:'center',

    },
    gambartexthome:{
      marginLeft:220,
      marginTop:5
    },
    starStyle : {
      width: 100,
      height: 20,
      marginBottom: 20,
    },
    texthome2:{
      marginLeft:30,
      flexDirection:'row'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        width:22,
        color: 'red',
        
      },
    Search:{
        flexDirection:'row',height:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffd700',
    },
    apik:{
      paddingLeft:40,
      position:'absolute',
      paddingTop:40
      
    },
    gambar:{
      height:100,
      borderRadius:50,
      width:100,
      alignSelf:'flex-start',
    marginTop:20,
    marginLeft:20

    },
  container:{
    paddingTop:5,
    flexDirection: 'column',
    
    
  },
  TouchableOpacity:{
    height:140,
    width:250,
    borderRadius:20,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#ffd700',
    margin:15
  },
  menuBox:{
    backgroundColor: "#fff",
    width:340,
    height:160,
    justifyContent: 'center',
    margin:10,
    elevation:40,
    borderWidth:1,
    borderRadius:20,
    borderColor:'#ffd700'
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:22,
    color: "#000",
    fontWeight:'bold',
    textAlign:'center'
  }
})
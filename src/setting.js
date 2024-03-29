import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';

export default class Setting extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Privasi',
          colortext: '#FF4500',
          color: '#ffd700',
          image: 'https://img.icons8.com/metro/52/000000/user-shield.png',
        },
        {
          id: 2,
          title: 'Tips\ndan\nTrik',
          colortext: '#4682B4',
          color: '#ffd700',
          image: 'https://img.icons8.com/metro/52/000000/fantasy.png',
        },
        {
          id: 3,
          title: 'Kebijakan\nRifin\nDelivery',
          colortext: '#6A5ACD',
          color: '#ffd700',
          image: 'https://img.icons8.com/color/70/000000/family.png',
        },
        {
          id: 4,
          title: 'Bersihkan\nCache',
          colortext: '#FF69B4',
          color: '#ffd700',
          image: 'https://img.icons8.com/metro/52/000000/trash.png',
        },
        {
          id: 5,
          title: 'Bahasa',
          colortext: '#00BFFF',
          color: '#ffd700',
          image: 'https://img.icons8.com/metro/52/000000/translation.png',
        },
        {
          id: 6,
          title: 'Notivikasi',
          colortext: '#00FFFF',
          color: '#ffd700',
          image: 'https://img.icons8.com/metro/52/000000/bell.png',
        },
      ],
    };
  }

  clickEventListener (item) {
    Alert.alert (item.title);
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity
                  style={[styles.card, {backgroundColor: item.color}]}
                  onPress={() => {
                    this.clickEventListener (item);
                  }}
                >
                  <Image style={styles.cardImage} source={{uri: item.image}} />
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}
                  >
                    <Text style={[styles.title, {color: item.colortext}]}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    flex: 1,
    alignSelf: 'center',
  },
});

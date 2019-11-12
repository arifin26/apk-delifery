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
  ImageBackground,
} from 'react-native';

export default class Promo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Rawon',
          position: 'W.berkah',
          diskon: '20%',
          image: 'https://blogkoinworks.sgp1.digitaloceanspaces.com/2019/07/makanan-khas-jawa.jpg',
        },
        {
          id: 2,
          name: 'cilok',
          position: 'w.indah',
          diskon: 'beli 2 gratis 1',
          image: 'http://cdn3.tstatic.net/jualbeli/img/2019/3/2292048/1-1420570429-Makanan-Ringan-Kebumen-0813-2988-2847.jpg',
        },
        {
          id: 3,
          name: 'Sempol',
          position: 'pak jaki',
          diskon: 'gratis ongkir',
          image: 'http://raw.cdn.baca.co.id/488773a6-b47b-48df-96e8-469a5adc70b7',
        },
        {
          id: 4,
          name: 'Siomay Cinta',
          position: 'mas Anang',
          diskon: 'gratis ongkir min 2 porsi',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGxBPloSlmyhq8Jy9EXk58xwZ--_8DfI6DQjuByn2ARe3Z_Do&s',
        },
        {
          id: 5,
          name: 'Kebab Turki',
          position: 'Mabolo',
          diskon: 'gratis ongkir',
          image: 'https://i1.wp.com/coleycooks.com/wp-content/uploads/2018/04/Pork-Kebab-Pitas-with-Toum-9.jpg?fit=3063%2C4595&ssl=1',
        },
        {
          id: 6,
          name: 'Bakso',
          position: 'W.Bakso Granat',
          image: 'https://mmc.tirto.id/image/otf/500x0/2019/07/13/bakso-istockphoto-copy_ratio-16x9.jpg',
        },
        {
          id: 7,
          name: 'Nasi goreng',
          position: 'Pak Anam',
          image: 'https://awsimages.detik.net.id/community/media/visual/2019/07/24/f24270f5-ec6a-461c-910a-3f9897aeb1bb_43.jpeg?w=700&q=90',
        },
        {
          id: 8,
          name: 'Iga Bakar',
          position: 'Bu Royan',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/7b/08/b9/iga-bakar-madu-petai.jpg',
        },
        {
          id: 9,
          name: 'Gudeg',
          position: 'Warung Paris',
          image: 'https://miro.medium.com/max/2100/1*QH07pwCT_rFf3oTSr0H-pw.jpeg',
        },
        {
          id: 10,
          name: 'Batagor',
          position: 'Batagor Anugrah',
          image: 'https://dikemas.com/uploads/2019/05/resep-batagor-enak-yang-bisa-kamu-jadikan-ladang-bisnis.jpg',
        },
      ],
    };
  }

  clickEventListener (item) {
    Alert.alert (item.name);
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
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.clickEventListener (item);
                }}
              >
                <View style={styles.cardHeader}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: 'https://img.icons8.com/flat_round/64/000000/hearts.png',
                    }}
                  />
                </View>
                <Image style={styles.userImage} source={{uri: item.image}} />
                <View style={styles.cardFooter}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}
                  >
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                    <TouchableOpacity
                      style={styles.followButton}
                      onPress={() => this.clickEventListener (item)}
                    >
                      <Text style={styles.followButtonText}>Pesan</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
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
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: '#ffd700',
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
});

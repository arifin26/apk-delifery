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

export default class app extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Salad',
          position: 'Djafu Cafe',
          image: 'https://images.wallpaperscraft.com/image/vegetables_fruit_pepper_cabbage_avocado_45146_300x168.jpg',
        },
        {
          id: 1,
          name: 'Gule',
          position: 'Cak Maman',
          image: 'https://masmuvin.files.wordpress.com/2015/09/resep-membuat-gule-kambing-yang-lezat.png',
        },
        {
          id: 2,
          name: 'Sate Madura',
          position: 'Warung pojok',
          image: 'data:image/jpeg;base64,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',
        },
        {
          id: 3,
          name: 'Opor Ayam',
          position: 'Bu Umi',
          image: 'https://scm-assets.constant.co/scm/unilever/a6798e909fa57bfd19c3e7f00737e5d6/354264d7-eb23-4d97-a222-1c762dbc8b8f.jpg',
        },
        {
          id: 4,
          name: 'Mie Ayam',
          position: 'Pasar Kuliner',
          image: 'https://s3.bukalapak.com/uploads/content_attachment/d1946b6716cf75ba59925da5/w-744/foto_thumbnail_mie_ayam.jpg',
        },
        {
          id: 5,
          name: 'Bakso',
          position: 'W.Bakso Granat',
          image: 'https://mmc.tirto.id/image/otf/500x0/2019/07/13/bakso-istockphoto-copy_ratio-16x9.jpg',
        },
        {
          id: 6,
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
          id: 9,
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

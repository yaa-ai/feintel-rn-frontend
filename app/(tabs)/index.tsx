import { View, type ViewProps, ImageBackground, StyleSheet, Dimensions, Text, Image } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Constants from 'expo-constants';

export default function HomeScreen() {
  return (
    <ImageBackground
            source={require('@/assets/images/pmanandhar_dark_blue_and_green_wavy_background_ec6d.png')}
            resizeMode="repeat"
            style={styles.image}
            
        >
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.textHighlight}>F</Text>uel <Text style={styles.textHighlight}>E</Text>conomy <Text style={styles.textHighlight}>IN</Text>telligence</Text>
        <View style={styles.imageContainer}>
          <Image source={require('@/assets/images/pmanandhar_logo_with_vehicles_notext.png')} style={styles.logo} />
        </View>
        <Text style={styles.textByLine}>Intelligent Tracking of Your Vehicles</Text>
      </View>
    </ImageBackground>
          
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center', 
  },
  imageContainer: {
    height:  Math.min(windowHeight, windowWidth)*0.4,
    width: windowWidth,
    borderWidth: 0,
    borderColor: '#000',
    alignSelf: 'center',
    backgroundColor: '#000000c0',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    alignContent: 'flex-end'
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: Math.min(windowHeight, windowWidth)*0.8,
    height:  Math.min(windowHeight, windowWidth)*0.1,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#000000c0',
  },
  textHighlight: {
    color: '#539d3d',
  },

  textByLine: {
    color: 'white',
    fontSize: 18,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#000000c0',
    color: '#539d3d',
  },
  
});

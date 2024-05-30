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
           <Text style={styles.text}>Inside</Text>
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
  },
  imageContainer: {
    height: windowHeight,
    width: windowWidth,
    borderWidth: 0,
    borderColor: '#000',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

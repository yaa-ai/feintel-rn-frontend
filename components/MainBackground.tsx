import { View, type ViewProps, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type MainBackgroundProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function MainBackground({ style, lightColor, darkColor, ...otherProps }: MainBackgroundProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={styles.imageContainer} {...otherProps}>
        <ImageBackground
            source={require('@/assets/images/pmanandhar_dark_blue_and_green_wavy_background_ec6d.png')}
            resizeMode="repeat"
            style={styles.image}
            
        />
    </View>;
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
    width: windowWidth - 20,
    borderWidth: 0,
    borderColor: '#000',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
});

import {Button, Image, StyleSheet, Text, View} from 'react-native';
import PostmortemShalaText from '../components/ShareLinksText';
import { Navigate } from '../utils/navigate';
import { Color } from '../utils/globalstyles';
import ShareLinksText from '../components/ShareLinksText';

const SplashScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <ShareLinksText fs={30} />
      <Button title='temp' onPress={()=>navigation.navigate(Navigate.ONBOARDING_SCREEN)}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Color.default,
    justifyContent: 'center',
    alignItems: 'center',
    gap:10
  },
  logo: {
    width: 103,
    height: 103,
  },
});

export default SplashScreen;

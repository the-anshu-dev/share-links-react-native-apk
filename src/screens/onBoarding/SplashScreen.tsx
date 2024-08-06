import {Button, Image, StyleSheet, Text, View} from 'react-native';
import PostmortemShalaText from '../../components/ShareLinksText';
import { Navigate } from '../../utils/navigate';
import { Color } from '../../utils/globalstyles';
import ShareLinksText from '../../components/ShareLinksText';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { useEffect } from 'react';

const SplashScreen = ({navigation}:any) => {
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     navigation.navigate(Navigate.SELECT_USER)
  //   },2000)

  // },[])
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.slogan}>Post and Find Jobs in One Click</Text>
      {/* <Button title='temp' onPress={()=>navigation.navigate(Navigate.ONBOARDING_SCREEN)}/> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Color.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // width: 103,
    // height: 103,
  },
  slogan:{
    fontSize:moderateScale(16),
    fontStyle:'italic',
    position:'absolute',
    bottom:moderateVerticalScale(80),
    fontWeight:'600'
  }
});

export default SplashScreen;

import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Color} from '../../utils/globalstyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import CustomSolidBtn from '../../components/Buttons/CustomSolidBtn';
import CustomBorderBtn from '../../components/Buttons/CustomBorderBtn';
import { Navigate } from '../../utils/navigate';
import Toast from 'react-native-simple-toast';
import { useState } from 'react';

const LoginForCompany = ({navigation}: any) => {
  const [loading, setLoading]= useState(false)
  const handleCreateAccount = ()=>{
    navigation.navigate(Navigate.SIGNUP_FOR_COMPANY)
  }
  const handleLogin = ()=>{
   console.log("Login Btn Pressed");
   Toast.show('Login Btn Pressed', Toast.SHORT);
   
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <CustomTextInput title='Email' placeholder='skill@gmail.com'/>
      <CustomTextInput title='Password' placeholder='******'/>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <CustomSolidBtn title='Login' onClick={handleLogin} loading={loading}/>
      <CustomBorderBtn title='Create Account' onClick={handleCreateAccount}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.default,
  },
  logo: {
    alignSelf: 'center',
    marginTop: moderateVerticalScale(40),
  },
  title: {
    fontSize: moderateScale(25),
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(30),
  },
  forgotPassword:{
alignSelf:'flex-end',
marginRight:moderateScale(20),
marginTop:moderateVerticalScale(10),
fontWeight:'500',
fontSize:moderateScale(16)
  },
});
export default LoginForCompany;

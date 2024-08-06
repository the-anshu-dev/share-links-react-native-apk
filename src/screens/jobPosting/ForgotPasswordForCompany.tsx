import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Color} from '../../utils/globalstyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import CustomSolidBtn from '../../components/Buttons/CustomSolidBtn';
import CustomBorderBtn from '../../components/Buttons/CustomBorderBtn';
import {Navigate} from '../../utils/navigate';
import Toast from 'react-native-simple-toast';
import {useState} from 'react';

const ForgotPasswordForCompany = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const Validate = () => {
    let validEmail = true;

    // Email
    if (email == '') {
      validEmail = false;
      setEmailError('Please enter email');
    } else if (email != '' && !email.toString().match(emailRegex)) {
      validEmail = false;
      setEmailError('Please enter valid email ');
    } else if (email != '' && email.toString().match(emailRegex)) {
      validEmail = true;
      setEmailError('');
    }

    return validEmail;
  };

  const handleForgotPassword = () => {
    navigation.navigate(Navigate.SIGNUP_FOR_COMPANY);
  };
  const handleLogin = () => {
    console.log('Login Btn Pressed');
    // Toast.show('Login Btn Pressed', Toast.SHORT);
    if (Validate()) {
      Toast.show('Api hits soon', Toast.SHORT);
    } else {
      Toast.show('Please validate field', Toast.SHORT);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        earum corporis laboriosam
      </Text>
      <CustomTextInput
        title="Email"
        placeholder="skill@gmail.com"
        value={email}
        error={emailError != '' ? true : false}
        onChangeText={(txt: any) => {
          setEmail(txt);
        }}
      />
      {emailError != '' && <Text style={styles.erroMsg}>{emailError}</Text>}

      <CustomSolidBtn title="Submit" onClick={handleLogin} loading={loading} />
      <CustomBorderBtn title="Go Back" onClick={() => navigation.goBack()} />
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
  desc: {
    fontSize: moderateScale(12),
    textAlign:'center',
    alignSelf: 'center',
    marginHorizontal:moderateScale(25),
    marginVertical: moderateVerticalScale(10),
  },

  erroMsg: {
    marginLeft: moderateScale(25),
    color: Color.error,
  },
});
export default ForgotPasswordForCompany;

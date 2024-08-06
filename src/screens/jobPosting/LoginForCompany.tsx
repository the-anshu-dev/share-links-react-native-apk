import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color} from '../../utils/globalstyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import CustomSolidBtn from '../../components/Buttons/CustomSolidBtn';
import CustomBorderBtn from '../../components/Buttons/CustomBorderBtn';
import {Navigate} from '../../utils/navigate';
import Toast from 'react-native-simple-toast';
import {useState} from 'react';

const LoginForCompany = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassoword] = useState('');
  const [passwordError, setPassowordError] = useState('');

  const Validate = () => {
    let validEmail,
      validPassword = true;

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

    //Password
    if (password == '') {
      validPassword = false;
      setPassowordError('Please enter password');
    } else if (password != '' && password.length < 6) {
      validPassword = false;
      setPassowordError('Please enter min 6 characters');
    } else if (password != '' && password.length >= 6) {
      validPassword = true;
      setPassowordError('');
    }

    return validEmail && validPassword;
  };

  const handleCreateAccount = () => {
    navigation.navigate(Navigate.SIGNUP_FOR_COMPANY);
  };
  const handleLogin = () => {
    console.log('Login Btn Pressed');
    // Toast.show('Login Btn Pressed', Toast.SHORT);
    if (Validate()) {
      Toast.show('Api hits soon', Toast.SHORT);
    } else {
      Toast.show('Please validate all field', Toast.SHORT);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
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
      <CustomTextInput
        title="Password"
        placeholder="******"
        value={password}
        error={passwordError != '' ? true : false}
        onChangeText={(txt: any) => {
          setPassoword(txt);
        }}
      />
      {passwordError != '' && (
        <Text style={styles.erroMsg}>{passwordError}</Text>
      )}
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() =>
          navigation.navigate(Navigate.FORGOT_PASSWORD_FOR_COMPANY)
        }>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <CustomSolidBtn title="Login" onClick={handleLogin} loading={loading} />
      <CustomBorderBtn title="Create Account" onClick={handleCreateAccount} />
      <Text style={styles.Or}>Or</Text>

      <View style={styles.LoginWith}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => console.log('Login with Google')}>
          <Image
            source={require('../../assets/google.png')}
            style={styles.image1}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => console.log('Login with Google')}>
          <Image
            source={require('../../assets/twitter.png')}
            style={styles.image2}
          />
        </TouchableOpacity>
      </View>

      </View>
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: moderateScale(20),
    marginTop: moderateVerticalScale(10),
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  erroMsg: {
    marginLeft: moderateScale(25),
    color: Color.error,
  },
  LoginWith:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:20
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image1: {
    width: scale(40),
    height: scale(40),
  },
  image2: {
    width: scale(28),
    height: scale(28),
  },
  Or:{
    textAlign:'center',
    marginVertical:moderateVerticalScale(10),
    fontSize:moderateScale(20),
    fontWeight:'500'
  },
});
export default LoginForCompany;

import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {Color} from '../../utils/globalstyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import CustomSolidBtn from '../../components/Buttons/CustomSolidBtn';
import CustomBorderBtn from '../../components/Buttons/CustomBorderBtn';
import {Navigate} from '../../utils/navigate';
import Toast from 'react-native-simple-toast';
import {useState} from 'react';
const SignUpForCompany = ({navigation}: any) => {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-\s][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
  const mobileNumberRegex = /^\+?[1-9]\d{1,14}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');

  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [contact, setConatct] = useState('');
  const [contactError, setContactError] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [password, setPassoword] = useState('');
  const [passwordError, setPassowordError] = useState('');

  console.log('Checking Filed ==> ', firstName);
  console.log('Checking Error Field ==> ', firstNameError);

  const Validate = () => {
    let validFirstName,
      validLastName,
      validEmail,
      validContact,
      validCompanyName,
      validAddress,
      validPassword = true;

    // First Name
    if (firstName == '') {
      validFirstName = false;
      setFirstNameError('Please enter first name');
      console.log('Error 1');
    } else if (firstName != '' && firstName.length < 3) {
      validFirstName = false;
      setFirstNameError('Please enter valid first name');
      console.log('Error 2');
    } else if (firstName != '' && firstName.length >= 3 && !firstName.toString().match(nameRegex)) {
      validFirstName = false;
      setFirstNameError('No special character allowed');
      console.log('Error 3');
    } else if (firstName != '' && firstName.length >= 3 && firstName.toString().match(nameRegex)) {
      validFirstName = true;
      setFirstNameError('');
    }

     // Last Name
     if (lastName == '') {
      validLastName = false;
      setLastNameError('Please enter laste name');
    } else if (lastName != '' && lastName.length < 3) {
      validLastName = false;
      setLastNameError('Please enter valid laste name');
    } else if (lastName != '' && lastName.length >= 3 && !lastName.toString().match(nameRegex)) {
      validLastName = false;
      setLastNameError('No special character allowed');
    } else if (lastName != '' && lastName.length >= 3 && lastName.toString().match(nameRegex)) {
      validLastName = true;
      setLastNameError('');
    }

    // Email
     if (email == '') {
      validEmail = false;
      setEmailError('Please enter email name');
    } else if (email != '' && !email.toString().match(emailRegex)) {
      validEmail = false;
      setEmailError('Please enter valid email ');
    }  else if (email != '' && email.toString().match(emailRegex)) {
      validEmail = true;
      setEmailError('');
    }

    // Contact : Phone
    if (contact == '') {
      validContact = false;
      setContactError('Please enter contact number ');
    } else if (contact != '' && contact.length<10) {
      validContact = false;
      setContactError('Please enter valid contact ');
    }else if (contact != '' && contact.length>=10 && !contact.toString().match(mobileNumberRegex)) {
      validContact = false;
      setContactError('Please enter valid contact ');
    }  else if (contact != '' && contact.length>=10 && contact.toString().match(mobileNumberRegex)) {
      validContact = true;
      setContactError('');
    }




  };

  // Validate()

  const handleSingUp = () => {
    console.log('SignUp Btn Pressed');
    Toast.show('SignUp Btn Pressed', Toast.SHORT);
    if (Validate()) {
    }
  };
  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Create Account</Text>
        <CustomTextInput
          title="First Name"
          placeholder="Anshu"
          value={firstName}
          error={firstNameError != '' ? true : false}
          onChangeText={(txt: any) => {
            setFirstName(txt);
          }}
        />
        {firstNameError != '' && (
          <Text style={styles.erroMsg}>{firstNameError}</Text>
        )}
        <CustomTextInput
          title="Last Name"
          placeholder="Chaurasia"
          value={lastName}
          error={lastNameError != '' ? true : false}
          onChangeText={(txt: any) => {
            setLastName(txt);
          }}
        />
        {lastNameError != '' && (
          <Text style={styles.erroMsg}>{lastNameError}</Text>
        )}

        <CustomTextInput
          title="Email"
          placeholder="skill@gmail.com"
          value={email}
          error={emailError != '' ? true : false}
          onChangeText={(txt: any) => {
            setEmail(txt);
          }}
        />
         {emailError != '' && (
          <Text style={styles.erroMsg}>{emailError}</Text>
        )}



        <CustomTextInput
          title="Contact"
          placeholder="+91 1234567890"
          value={contact}
          error={contactError != '' ? true : false}
          onChangeText={(txt: any) => {
            setConatct(txt);
          }}
        />
         {contactError != '' && (
          <Text style={styles.erroMsg}>{contactError}</Text>
        )}
        {/* 12369 */}
        <CustomTextInput
          title="Company Name"
          placeholder="Google, Microsoft,..."
          value={companyName}
          onChangeText={(txt: any) => {
            setCompanyName(txt);
          }}
        />
        <CustomTextInput
          title="Address"
          placeholder="198/53 Street, Delhi..."
          value={address}
          onChangeText={(txt: any) => {
            setAddress(txt);
          }}
        />
        <CustomTextInput
          title="Password"
          placeholder="******"
          value={password}
          onChangeText={(txt: any) => {
            setPassoword(txt);
          }}
        />
        <CustomSolidBtn title="SignUp" onClick={handleSingUp} />
        <CustomBorderBtn title="Login" onClick={handleLogin} />
      </ScrollView>
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
    fontWeight: '500',
    fontSize: moderateScale(16),
  },
  erroMsg: {
    marginLeft: moderateScale(25),
    color: Color.error,
  },
});
export default SignUpForCompany;

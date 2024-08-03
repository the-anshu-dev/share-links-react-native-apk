import {Button, Text, View} from 'react-native';

const LoginScreen = ({navigation}:any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}> Login Screen</Text>
      <Button title='goBack' onPress={()=>navigation.goBack()}/>
    </View>
  );
};

export default LoginScreen;

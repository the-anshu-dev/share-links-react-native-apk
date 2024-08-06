import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import RedText from '../../components/RedText';
import { Navigate } from '../../utils/navigate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color } from '../../utils/globalstyles';

const OnboardingScreen = ({ navigation }: any) => {
  const handleDone = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.navigate(Navigate.SELECT_USER);
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.navigate(Navigate.SELECT_USER);
  };


  const doneButton = (props: any) => {
    return (
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Onboarding
      onDone={handleDone}
      onSkip={handleSkip} 
      bottomBarHighlight={false}
      DoneButtonComponent={doneButton}
      bottomBarColor={'transparent'}
      subTitleStyles={{ marginHorizontal: 45 }}
      pages={[
        {
          backgroundColor: Color.default,
          image: (
            <Image
              source={require('../../assets/onBoarding/onBoarding1.png')}
              style={{ width: 350, height: 233 }}
            />
          ),
          title: (
            <RedText text="Unlock the World of Code :" fs={24} fw="500" />
          ),
          subtitle: 'Learn, Practice,and Excel with Ease...!',
        },
        {
          backgroundColor: Color.default,
          image: (
            <Image
              source={require('../../assets/onBoarding/onBoarding2.png')}
              style={{ width: 350, height: 233 }}
            />
          ),
          title: <RedText text="Code Your Dreams :" fs={24} fw="500" />,
          subtitle: 'Empowering Aspiring Developers, One Line at a Time.',
        },
        {
          backgroundColor: Color.default,
          image: (
            <Image
              source={require('../../assets/onBoarding/onBoarding3.png')}
              style={{ width: 350, height: 233 }}
            />
          ),
          title: (
            <RedText text="Master Coding Anywhere, Anytime:" fs={24} fw="500" />
          ),
          subtitle: 'Your Gateway to Tech Brilliance.',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  doneButton: {
    padding: 20,
  },
});

export default OnboardingScreen;

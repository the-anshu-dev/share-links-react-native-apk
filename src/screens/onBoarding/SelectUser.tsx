import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color } from '../../utils/globalstyles'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { Navigate } from '../../utils/navigate'

const SelectUser = ({navigation}:any) => {
  return (
  <View style={styles.container}>
    <Image source={require('../../assets/logo.png')} style={styles.logo}/>
    <Text style={styles.title}>What you are looking for?</Text>
    <TouchableOpacity style={styles.wantToHire} onPress={()=>{navigation.navigate(Navigate.JOB_POSTING_NAVIGATION)}}>
      <Text style={styles.btnText1}>Want to Hire Candidate </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wantToJob}  onPress={()=>{navigation.navigate(Navigate.JOB_SEARCHING_NAVIGATION)}}>
    <Text style={styles.btnText2}>Want to Get Job</Text>

    </TouchableOpacity>

  </View>
  )
}
const styles =  StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Color.default,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:moderateScale(20),
    fontWeight:'600'
  },
  wantToHire:{
    width:'90%',
    height:verticalScale(45),
    backgroundColor:Color.midBlack,
    borderRadius:moderateScale(10),
    justifyContent:'center',
    alignItems:'center',
    marginTop:moderateVerticalScale(20)

  }, wantToJob:{
    width:'90%',
    height:verticalScale(45),
    borderColor:Color.midBlack,
    borderWidth:1,
    borderRadius:moderateScale(10),
    justifyContent:'center',
    alignItems:'center',
    marginTop:moderateVerticalScale(20)

  },
  btnText1:{
    color:Color.white,
    fontSize:moderateScale(16),
    fontWeight:'500'
  },
  btnText2:{
    color:Color.black,
    fontSize:moderateScale(16),
    fontWeight:'500'
  },
  logo:{
    // height:scale(100),
    // width:scale(100),
    marginBottom:moderateVerticalScale(50)
  }
})
export default SelectUser

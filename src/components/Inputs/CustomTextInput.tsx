import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import { Color } from '../../utils/globalstyles'

const CustomTextInput = ({title, placeholder, value, onChangeText, error}:any) => {
  return (
   <View style={[styles.input, {borderColor:error?Color.error:Color.black}]}>
    <Text style={styles.title}>{title}</Text>
    <TextInput placeholder={placeholder} value={value} onChangeText={(txt)=>onChangeText(txt)} />
   </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input:{
        width:'90%',
        height:verticalScale(42),
        borderWidth:0.4,
        alignSelf:'center', marginTop:moderateVerticalScale(20),
        borderRadius:moderateScale(10),
        justifyContent:'center',
        paddingLeft:moderateScale(15),
        paddingRight:moderateScale(15),
    },
    title:{
        alignSelf:'flex-start',
        marginLeft:moderateScale(20),
        top:-moderateVerticalScale(8),
        position:'absolute', 
        backgroundColor:Color.default,
        paddingLeft:moderateScale(10),
        paddingRight:moderateScale(10)
    },
})

import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { Color } from '../../utils/globalstyles'

const CustomSolidBtn = ({title, onClick,loading}:any) => {
  return (
    <TouchableOpacity style={styles.btn}onPress={()=>{onClick()}} >
          {loading?<ActivityIndicator color={Color.white}/>:<Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  )
}

export default CustomSolidBtn
const styles = StyleSheet.create({
    btn:{
        width:'90%',
        height:moderateVerticalScale(45),
        backgroundColor:Color.midBlack,
        alignSelf:'center',
        marginTop:moderateVerticalScale(20),
        borderRadius:moderateScale(10),
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
color:Color.white,
fontWeight:'500',
fontSize:moderateScale(16)
    },
})
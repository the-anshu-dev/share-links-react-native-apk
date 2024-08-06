import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { Color } from '../../utils/globalstyles'

const CustomBorderBtn = ({title, onClick, loading}:any) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={()=>onClick()} >
      {loading?<ActivityIndicator color={Color.black}/>:<Text style={styles.title}>{title}</Text>}
    
</TouchableOpacity>
  )
}

export default CustomBorderBtn

const styles = StyleSheet.create({
    btn:{
        width:'90%',
        height:moderateVerticalScale(45),
        borderColor:Color.midBlack,
        borderWidth:1,
        alignSelf:'center',
        marginTop:moderateVerticalScale(20),
        borderRadius:moderateScale(10),
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
color:Color.black,
fontWeight:'500',
fontSize:moderateScale(16)
    },
})

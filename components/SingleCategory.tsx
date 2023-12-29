import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
type TProps = {
  title: string;
  color: string;
  onPress:()=>void
};
function SingleCategory({ title, color ,onPress}: TProps) {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{color:'#ccc'}}  style={({pressed})=>pressed?[styles.pressableStyle,{backgroundColor:color},{opacity:0.8}]:[styles.pressableStyle,{backgroundColor:color},styles.pressableStyle]} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    width:150,
    height:150,
    elevation:4,
    margin:10,
    borderRadius:8,
    // borderWidth:2,
    // borderColor:'black',
    backgroundColor:'white',
    shadowColor:'black',
    shadowRadius:10,
    textShadowOffset:{width:0,height:2},
    shadowOpacity:0.25

  },
  pressableStyle:{
flex:1,
    borderRadius:8,

  },
  innerContainer:{
    flex:1,
    justifyContent:"center",
    borderRadius:8,

    alignItems:'center',
  }
})

export default SingleCategory;

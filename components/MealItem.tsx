import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { TMeal } from "../types";
import { Feather } from '@expo/vector-icons';
//  categoryIds: Array<string>;
//     title: string;
//     imageUrl: string;
//     ingredients: Array<string>;
//     steps: Array<string>;
//     duration: number;
//     complexity: string;
//     affordability: string;
//     isGlutenFree: boolean;
const MealItem = ({ item }: { item: TMeal }) => {
  return (
    <View style={[styles.container]}>
      <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>pressed?[styles.pressableStyle,{width:'100%'},{opacity:0.7}] :[styles.pressableStyle,{width:'100%'}]}>
        <View style={styles.imageStyleContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} resizeMode="cover" />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.styleTitle}>{item.title}</Text>
          <View style={{width:'100%',flexDirection:"row",alignItems:'center',justifyContent:'flex-end',gap:10}}>
            
          <Text style={{fontSize:14,opacity:0.5,fontWeight:'600',textAlign:"right"}}>{item.duration}m</Text>
          <Text style={{fontSize:14,opacity:0.5,fontWeight:'600',textAlign:"right"}}>{item.complexity}</Text>
          <Text style={{fontSize:14,opacity:0.5,fontWeight:'600',textAlign:"right"}}>{item.affordability}</Text>
          </View>
          <Pressable style={({pressed})=>pressed?[{backgroundColor:"#3299a8",padding:5,borderRadius:5,opacity:0.6}]:[{backgroundColor:"#3299a8",padding:5,borderRadius:5}]}>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
              <Feather name="info" size={24} color='white'/>
              <Text style={{color:"white",fontWeight:'600'}}>Further information</Text>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'white',
    padding:10,
    margin:10,
    borderRadius:5,
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:4},
    shadowRadius:10,
    shadowOpacity:0.3
  },
  pressableStyle:{
    flex:1,
    borderRadius:5,
  },
  imageStyleContainer:{
    width:'100%',
    alignSelf:'center'
  },
  imageStyle: {
    width:"100%",
    height:250,
    borderRadius:5,
    flex: 0.7,
  },
  infoContainer:{
    flex:0.3,
    gap:5
  },
  styleTitle:{
    fontSize:20,
    fontWeight:"600"
  }
});
export default MealItem;

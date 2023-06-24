//Befor you can 
import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import { View,Text,Image,TouchableOpacity ,StatusBar,SafeAreaView,ScrollView,} from 'react-native';
import { Input } from "react-native-elements";
import { styles } from "../stylingSheet/mainStyle";
import FooterBar from "./FooterBar";

// React native Icons
// import { Icon} from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';





export default function Search(){
    const navigation = useNavigation();
return(

    <SafeAreaView style={{flex:1,backgroundColor:'black'}} >
    <StatusBar barStyle="light-content" hidden={false} />
    <View style={styles.pages}>

    <View style={styles.details_section}>
    <ScrollView>
      
<View style={styles.card1}>
<Text style={styles.search}> Search </Text>
<View style={styles.card2}>
 <TouchableOpacity>
 <Image source={require('../Images/search.png')} style={styles.searchicon}/>
 </TouchableOpacity>
</View>

</View>
<Input placeholder="What do you want to listen "  style={styles.searchbar} inlineImageLeft='search_icon' />

<Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Browse all </Text>
{/* ================================Boxes for the live music================================ */}


<View style={styles.search_divide}>
<View style={[styles.color1,styles.spaces]}>
<Text style={styles.boxText}>Podcasts</Text>
<Image source={{uri:'https://images.pexels.com/photos/7751834/pexels-photo-7751834.jpeg?auto=compress&cs=tinysrgb&w=600'}} style={styles.image_rotate}/>
</View>

<View style={[styles.color2,styles.spaces]}>
<Text style={styles.boxText}>Live Events</Text>
</View>

</View>


<View style={styles.search_divide}>
<View style={[styles.color3,styles.spaces]}>
<Text style={styles.boxText}>Made For {'\n'}You</Text>
</View>

<View style={[styles.color4,styles.spaces]}>
<Text style={styles.boxText}>New {'\n'}releases</Text>
</View>

</View>

<View style={styles.search_divide}>
<View style={[styles.color5,styles.spaces]}>
<Text style={styles.boxText}>Afro</Text>
</View>

<View style={[styles.color6,styles.spaces]}>
<Text style={styles.boxText}>Hip-Hop</Text>
</View>

</View>



<View style={styles.search_divide}>
<View style={[styles.color7,styles.spaces]}>
<Text style={styles.boxText}>Pop</Text>
</View>

<View style={[styles.color8,styles.spaces]}>
<Text style={styles.boxText}>Christian &{'\n'}Gospel</Text>
</View>

</View>


<View style={styles.search_divide}>
<View style={[styles.color9,styles.spaces]}>
<Text style={styles.boxText}>Charts</Text>
</View>

<View style={[styles.color10,styles.spaces]}>
<Text style={styles.boxText}>Mood</Text>
</View>

</View>


<View style={styles.search_divide}>
<View style={[styles.color11,styles.spaces]}>
<Text style={styles.boxText}>Radar</Text>
</View>

<View style={[styles.color12,styles.spaces]}>
<Text style={styles.boxText}>Throw back </Text>
</View>
</View>

<View style={styles.search_divide}>
<View style={[styles.color13,styles.spaces]}>
<Text style={styles.boxText}>Love</Text>
</View>

<View style={[styles.color14,styles.spaces]}>
<Text style={styles.boxText}>Workout </Text>
</View>
</View>

<View style={styles.search_divide}>
<View style={[styles.color15,styles.spaces]}>
<Text style={styles.boxText}>Jazz</Text>
</View>

<View style={[styles.color16,styles.spaces]}>
<Text style={styles.boxText}>Animation </Text>
</View>
</View>

<View style={styles.search_divide}>
<View style={[styles.color17,styles.spaces]}>
<Text style={styles.boxText}>Radio</Text>
</View>

<View style={[styles.color18,styles.spaces]}>
<Text style={styles.boxText}>Soul </Text>
</View>
</View>

<View style={styles.search_divide}>
<View style={[styles.color19,styles.spaces]}>
<Text style={styles.boxText}>Gaming</Text>
</View>

<View style={[styles.color20,styles.spaces]}>
<Text style={styles.boxText}>Tv & Movies</Text>
</View>
</View>
<View style={styles.search_divide}>
<View style={[styles.color21,styles.spaces]}>
<Text style={styles.boxText}>Blues </Text>
</View>

<View style={[styles.color22,styles.spaces]}>
<Text style={styles.boxText}>Rock</Text>
</View>
</View> 





</ScrollView>
</View>
<FooterBar/>
</View>
</SafeAreaView>

 )}
   

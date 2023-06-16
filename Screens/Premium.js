//Befor you can 
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View,Text,Image,TouchableOpacity ,StatusBar,SafeAreaView,ScrollView} from 'react-native';
import { styles } from "../stylingSheet/mainStyle";
import FooterBar from "./FooterBar";

// React native Icons
// import { Icon} from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';





export default function Search(){
    const navigation = useNavigation();
    
    const currents = new Date();
    const time = currents.toLocaleTimeString('en-US', { hour: '2-digit' });
   
  
    let greeting;
    
    if (time >= '00:00' && time <= '12:00') {
      greeting = 'Good morning';
    } else if (time >= '12:00' && time <= '17:00') {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
    
        
return(

    <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
    <StatusBar barStyle="light-content" hidden={false} />
    <View style={styles.pages}>
    <View style={styles.details_section}>
    <ScrollView>
      
<View style={styles.card1}>
<Text style={styles.greeting}> {greeting}</Text>
<View style={styles.card2}>
<TouchableOpacity>
 <Image source={require('../Images/notification.png')} style={styles.icons} />
</TouchableOpacity>

 <TouchableOpacity>
 <Image source={require('../Images/clock.png')} style={styles.icons}/>
 </TouchableOpacity>
 <TouchableOpacity>
 <Image source={require('../Images/settings.png')} style={styles.icons}/>
 </TouchableOpacity>
</View>
</View>





















</ScrollView>



</View>
<FooterBar/>
</View>
</SafeAreaView>
            

 )};
   

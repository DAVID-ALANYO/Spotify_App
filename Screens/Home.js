//Befor you can 
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View,Text,Image,TouchableOpacity ,StatusBar} from 'react-native';
import { styles } from "../stylingSheet/mainStyle";
// React native Icons
// import { Icon} from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';






export default function Home(){
    const navigation = useNavigation();
        return(
            
    
    <View style={styles.mainview}>
    <StatusBar barStyle="light-content" />

  <View style={styles.footer_bar} > 

 
     <View style={styles.icon_position}>

     <TouchableOpacity onPress={()=> navigation.navigate("Home")} >
     
     <Image style={styles.footer_images} source={require('../Images/home.png')}/>
      <Text style={styles.footer_text}>Home</Text>
       
     </TouchableOpacity>

     </View>
   
     <View style={styles.icon_position}>
     <TouchableOpacity onPress={() => navigation.navigate('Search')
     } >
     
     <Image style={styles.footer_images} source={require('../Images/search.png')}/>
      <Text style={styles.footer_text}>Search</Text>
       
     </TouchableOpacity>
     </View>

     <View style={styles.icon_position}>
     <TouchableOpacity  onPress={() => navigation.navigate('Library')}> 
     <Image style={styles.footer_images} source={require('../Images/books.png')}/>
      <Text style={styles.footer_text}>Library</Text>  
     </TouchableOpacity>
     </View>

     <View style={styles.icon_position}>
     <TouchableOpacity onPress={() => navigation.navigate('Premium')}>
     <Image style={styles.footer_images} source={require('../Images/spotify.png')}/>
      <Text style={styles.footer_text}>Premium</Text>
       
     </TouchableOpacity>

     </View>

     
    </View>
 </View>

       
         

         
        )
    }

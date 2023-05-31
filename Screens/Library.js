import { View, Text,StatusBar,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { styles } from "../stylingSheet/mainStyle";



export default function Search() {
    const navigation = useNavigation();
  return (
    
              
   <View style={styles.pages}>


   <View style={styles.details_section}>
   
   </View>
  
  {/* =================================++++Footer Section ================= */}
   <View style={styles.footer_section}>
  
   <View style={styles.footer_bar} > 
       <View style={styles.icon_position}>
  
       <TouchableOpacity onPress={()=> navigation.navigate("Home")} >
       <Image style={styles.footer_images} source={require('../Images/home.png')}/>
        <Text style={styles.footer_text}> Home </Text>
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
     </View>
   
  )
}

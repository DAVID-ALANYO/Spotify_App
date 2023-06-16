import { View, Text,TouchableOpacity,Image, ScrollView } from 'react-native';
import React, {useState,useEffect} from 'react';
import { useNavigation } from "@react-navigation/native";
import { styles } from "../stylingSheet/mainStyle";
import FooterBar from '../Screens/FooterBar';



export default function Search() {
    const navigation = useNavigation();

    
  return (
    
              
   <View style={styles.pages}>


   <View style={styles.details_section}>
   <ScrollView style={{backgroundColor:'#040404ff'}}>
   <View style={styles.Library_Bar}>
      
      <View style={styles.Library_Bar1}>
      <TouchableOpacity>
        <Image source={require('../Images/spotify.png')} style={{width:30,height:30,borderRadius:100,resizeMode:'contain',marginRight:10,backgroundColor:'green'}}/>
      </TouchableOpacity>

       <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>Your Library </Text>

      </View>

      <View style={styles.Library_Bar1}>
      <TouchableOpacity>
        <Image source={require('../Images/search.png')} style={{width:25,height:25,marginRight:15}}/>
        </TouchableOpacity>
       
      </View>
      </View>


<View style={styles.Library_Bar2}>
      <TouchableOpacity>
        <Image source={require('../Imagebanner/david.jpeg')} style={{width:80,height:80,borderRadius:100,resizeMode:'cover',margin:10}}/>
      </TouchableOpacity>
       <View style={{margin:15,}}>
       <Text style={{color:'white',fontSize:20,fontWeight:'300',}}>David Alanyo </Text>
       <Text style={{color:'white',fontSize:16,fontWeight:'100',}}> Developer </Text>
   
    </View>
</View>
<View style={styles.Library_Bar2}>
      <TouchableOpacity>
        <Image source={require('../Imagebanner/ada.jpeg')} style={{width:80,height:80,borderRadius:100,resizeMode:'cover',margin:10}}/>
      </TouchableOpacity>
       <View style={{margin:15,}}>
       <Text style={{color:'white',fontSize:20,fontWeight:'300',}}>Ada Ehi</Text>
       <Text style={{color:'white',fontSize:16,fontWeight:'100',}}>Artist </Text>
    </View>
</View>

<View style={styles.Library_Bar2}>
      <TouchableOpacity>
        <Image source={require('../Imagebanner/blacko.jpeg')} style={{width:80,height:80,borderRadius:100,resizeMode:'cover',margin:10}}/>
      </TouchableOpacity>
       <View style={{margin:15,}}>
       <Text style={{color:'white',fontSize:20,fontWeight:'300',}}>Black Sherrif</Text>
       <Text style={{color:'white',fontSize:16,fontWeight:'100',}}>Artist </Text>
    </View>
</View>

<View style={styles.Library_Bar2}>
      <TouchableOpacity>
        <Image source={require('../Imagebanner/alanwalker.jpeg')} style={{width:80,height:80,borderRadius:100,resizeMode:'cover',margin:10}}/>
      </TouchableOpacity>
       <View style={{margin:15,}}>
       <Text style={{color:'white',fontSize:20,fontWeight:'300',}}>Alan Walker</Text>
       <Text style={{color:'white',fontSize:16,fontWeight:'100',}}>Artist </Text>
    </View>
</View>

<View style={styles.Library_Bar2}>
      <TouchableOpacity>
        <Image source={require('../Imagebanner/ada.jpeg')} style={{width:80,height:80,borderRadius:100,resizeMode:'cover',margin:10}}/>
      </TouchableOpacity>
       <View style={{margin:15,}}>
       <Text style={{color:'white',fontSize:20,fontWeight:'300',}}>Ada Ehi</Text>
       <Text style={{color:'white',fontSize:16,fontWeight:'100',}}>Artist </Text>
    </View>
</View>
<View style={styles.Library_Bar2}>
      <TouchableOpacity>
        <Image source={require('../Imagebanner/mashmello.jpeg')} style={{width:80,height:80,borderRadius:100,resizeMode:'cover',margin:10}}/>
      </TouchableOpacity>
       <View style={{margin:15,}}>
       <Text style={{color:'white',fontSize:20,fontWeight:'300',}}>Ada Ehi</Text>
       <Text style={{color:'white',fontSize:16,fontWeight:'100',}}>Artist </Text>
    </View>
</View>

   </ScrollView>
   </View>

  
    <FooterBar/>

    
   </View>
   
  )
}

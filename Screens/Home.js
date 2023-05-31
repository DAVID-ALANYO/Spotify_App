//Befor you can 
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View,Text,Image,TouchableOpacity ,StatusBar,SafeAreaView,ScrollView} from 'react-native';
import { styles } from "../stylingSheet/mainStyle";
// React native Icons
// import { Icon} from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';





export default function Home(){
    const navigation = useNavigation();
    
        const current = new Date();

         const time = current.toLocaleTimeString('en-Us', {
          hour: '2-digit', // Add this line to ensure 24-hour format

        });
      
        let greeting;
      
        if (time < '00:00 AM' && time <='12:00') {
          greeting = 'Good morning';
        } else if (time >= '12:00' && time <='17:00') {
          greeting = 'Good afternoon';
        } else {
          greeting = 'Good evening';
        }
        return(

    <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
    <StatusBar barStyle="light-content" hidden={false} />
          <View style={styles.pages}>
        <View style={styles.bar}></View>
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

<View style={styles.card3}>
<View style={styles.banner}>
<Image source={require("../Imagebanner/MercyOc.jpeg")} style={{width:50,height:50}} />
<Text style={styles.note}> Resently  {'\n'} Like Pictures </Text>
</View>
<View style={styles.banner}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:50,height:50}} />
<Text style={styles.note}> Nathaniel {'\n'} Bassey /pricingMix</Text>
</View>
</View>
{/* Ada Ehi */}
<View style={styles.card3}>
<View style={styles.banner}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:50,height:50}} />
<Text style={styles.note}> Ada Ehi{'\n'} Only you Mix</Text>
</View>
<View style={styles.banner}>
<Image source={require("../Imagebanner/MercyOc.jpeg")}  style={{width:50,height:50}} />
<Text style={styles.note}> Alan walker {'\n'} </Text>
</View>
</View>
{/* Ada Ehi */}
<View style={styles.card3}>
<View style={styles.banner}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:50,height:50}} />
<Text style={styles.note}> Ada Ehi{'\n'} Only you Mix</Text>
</View>
<View style={styles.banner}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:50,height:50}} />
<Text style={styles.note}> Alan walker {'\n'} </Text>
</View>
</View>
<Text style={styles.headings} >Resenntly played </Text>
{/* Sliding left */}
<ScrollView showsHorizontalScrollIndicator={false}horizontal={true}>
<View style={styles.card3}>
<View style={styles.banner}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:50,height:50}} />
<Text style={styles.note}> Ada Ehi{'\n'} Only you Mix</Text>
</View>
<View style={styles.banner}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:50,height:50}} />
<Text style={styles.note}> Alan walker {'\n'} </Text>
</View>
<View style={styles.banner}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:50,height:50}} />
<Text style={styles.note}> Alan walker {'\n'} </Text>
</View>
</View>
</ScrollView>
</ScrollView>
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
            

             </SafeAreaView>
            

 )}
   

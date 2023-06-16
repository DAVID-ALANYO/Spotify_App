//Befor you can 
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View,Text,Image,TouchableOpacity ,StatusBar,SafeAreaView,ScrollView} from 'react-native';
import { styles } from "../stylingSheet/mainStyle";
import FooterBar from '../Screens/FooterBar';
// React native Icons
// import { Icon} from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';





export default function Home(){
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

<View style={styles.card3}>
<View style={styles.banner}>
<Image source={require("../Imagebanner/MercyOc.jpeg")} style={{width:50,height:50,}} />
<Text style={styles.note}> Chimode  {'\n'} Ichimo </Text>
</View>
<View style={styles.banner}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:50,height:50}} />
<Text style={styles.note}> Nathaniel Bassey  {'\n'} you made it</Text>
</View>
</View>
{/* Ada Ehi */}
<View style={styles.card3}>
<View style={styles.banner}>
<Image source={require("../Imagebanner/blacko.jpeg")} style={{width:50,height:50}} />
<Text style={styles.note}> Black Sherif{'\n'}Soja, more...</Text>
</View>
<View style={styles.banner}>
<Image source={require("../Imagebanner/ada.jpeg")}  style={{width:50,height:50}} />
<Text style={styles.note}> Ada Ehi {'\n'} Finale say</Text>
</View>
</View>
{/* Ada Ehi */}
<View style={styles.card3}>
<View style={styles.banner}>
<Image source={require("../Imagebanner/alanwalker.jpeg")} style={{width:50,height:50}} />
<Text style={styles.note}> Alan way{'\n'}in the mix...</Text>
</View>
<View style={styles.banner}>
<Image source={require("../Imagebanner/joe_metel.jpeg")} style={{width:50,height:50}} />
<Text style={styles.note}> Joe Mettle {'\n'}Obolo ee... </Text>
</View>
</View>

<Text style={styles.headings} > Recently played </Text>
{/* Sliding left  Recently */}
<ScrollView showsHorizontalScrollIndicator={false}horizontal={true}>

<View style={styles.card3}>
<View style={styles.banner2}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:120,height:110, }} />
<Text style={styles.banner2s}> Nathaniel Bassey</Text>
</View>
<View style={styles.banner2}>
<Image source={require("../Imagebanner/alanwalker.jpeg")} style={{width:120,height:110, }} />
<Text style={styles.banner2s}> Alan Walker</Text>
</View>

<View style={styles.banner2}>
<Image source={require("../Imagebanner/mashmello.jpeg")} style={{width:120,height:110,}} />
<Text style={styles.banner2s}> Mash Mellow</Text>

</View>

<View style={styles.banner2}>
<Image source={require("../Imagebanner/blacko.jpeg")} style={{width:120,height:110,}} />
<Text style={styles.banner2s}> Blaco -Soja</Text>
</View>

<View style={styles.banner2}>
<Image source={require("../Imagebanner/mog.jpeg")} style={{width:120,height:120}} />
<Text style={styles.banner2s}> MoG-Music</Text>
</View>

</View>
</ScrollView>

<Text style={styles.headings} > Try something else </Text>
{/* Sliding left  Recently */}
<ScrollView showsHorizontalScrollIndicator={false}horizontal={true}>

<View style={styles.card3}>
<View style={styles.banner3}>
<Image source={require("../Imagebanner/blacko.jpeg")} style={{width:150,height:150,margin:5}} />
<Text style={styles.subText}> Blacko,Ed Sheeran,Rema, {'\n'}Burna Boy,Arya starr,... </Text>
</View>

<View style={styles.banner3}>
<Image source={require("../Imagebanner/Nathaniel.jpg")} style={{width:150,height:150,margin:10}} />
<Text style={styles.subText}> Nathaniel Bassy,Mog{'\n'}Ada Ehi,Deyvid </Text>
</View>

<View style={styles.banner3}>
<Image source={require("../Imagebanner/blacko.jpeg")} style={{width:150,height:150,margin:10}} />
<Text style={styles.subText}> Blacko,Ed Sheeran,Rema, {'\n'}Burna Boy,Arya starr,... </Text>
</View>


</View>
</ScrollView>


<Text style={styles.headings} > New Releases for you. </Text>
{/* Sliding left  Recently */}
<ScrollView showsHorizontalScrollIndicator={false}horizontal={true}>

<View style={styles.card3}>
<View style={styles.banner3}>
<Image source={require("../Imagebanner/mashmello.jpeg")} style={{width:150,height:150,margin:10}} />
<Text style={styles.subText}>Catch all the latest  {'\n'}music from artist you... </Text>
</View>

<View style={styles.banner3}>
<Image source={require("../Imagebanner/eeezee.jpg")} style={{width:150,height:150,margin:10}} />
<Text style={styles.subText}>The message Guc{'\n'}Album GUC .. </Text>
</View>

<View style={styles.banner3}>
<Image source={require("../Imagebanner/eugene.jpeg")} style={{width:150,height:150,margin:10,resizeMode:"cover"}} />
<Text style={styles.subText}> Eminem ft{'\n'}Rhina roler... </Text>
</View>

<View style={styles.banner3}>
<Image source={require("../Imagebanner/gf.jpeg")} style={{width:150,height:150,margin:10,resizeMode:"cover"}} />
<Text style={styles.subText}> Ps Edwin ft David Alanyo{'\n'}Glory to God </Text>
</View>

</View>
</ScrollView>



<View style={styles.roundedone}>
<Image source={{uri:'https://media.afrocharts.com/file/afrocharts-media/uploads/2019/10/NATHANIEL-BASSEY-afrocharts.jpg'}} style={styles.rounded}/>
<Text style={styles.roundText}>More likes{'\n'}<Text style={styles.roundBigText}>Nathaniel Bassey </Text></Text>

</View>

{/* Sliding left  Recently */}

<ScrollView showsHorizontalScrollIndicator={false}horizontal={true}>

<View style={styles.card3}>
<View style={styles.banner3}>
<Image source={require("../Imagebanner/3.jpeg")} style={{width:150,height:150,margin:10}} />
<Text style={styles.subText}>Catch all the latest  {'\n'}music from artist you... </Text>
</View>

<View style={styles.banner3}>
<Image source={require("../Imagebanner/eeezee.jpg")} style={{width:150,height:150,margin:10}} />
<Text style={styles.subText}>The message Guc{'\n'}Album GUC .. </Text>
</View>

<View style={styles.banner3}>
<Image source={require("../Imagebanner/eugene.jpeg")} style={{width:150,height:150,margin:10,resizeMode:"cover"}} />
<Text style={styles.subText}> Eminem ft{'\n'}Rhina roler... </Text>
</View>

<View style={styles.banner3}>
<Image source={require("../Imagebanner/gf.jpeg")} style={{width:150,height:150,margin:10,resizeMode:"cover"}} />
<Text style={styles.subText}> Ps Edwin ft David Alanyo{'\n'}Glory to God </Text>
</View>
<View style={styles.banner3}>
<Image source={require("../Imagebanner/four.jpeg")} style={{width:150,height:150,margin:10,resizeMode:"cover"}} />
<Text style={styles.subText}> We win more{'\n'}Glory to God </Text>
</View>
</View>
</ScrollView>


</ScrollView>
</View>
<FooterBar/>

</View>
</SafeAreaView>
            

 )}
   

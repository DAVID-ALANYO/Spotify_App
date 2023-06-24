//Befor you can 
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View,Text,Image,TouchableOpacity ,StatusBar,SafeAreaView,ScrollView,Button, TouchableHighlight, FlatList} from 'react-native';
import { styles } from "../stylingSheet/mainStyle";
import FooterBar from "./FooterBar";
import { Modal } from "react-native";

// React native Icons
// import { Icon} from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';





export default function Search(){
  const navigation = useNavigation();
 const [visible,setVisible] = useState(false);
 const show = () =>setVisible(true);
 const hide = () => setVisible(false)    
return(

  <SafeAreaView style={{flex:1,backgroundColor:'#000000'}}>
  <StatusBar barStyle="light-content" hidden={false} />
  <View style={styles.pages}>
  <View style={styles.details_section}>
  <Button title="Show" onPress={show}/>
 <Modal
  visible={visible}
  animationType={"slide"}
  onRequestClose={true}
  onSwipeComplete={() => hide()}
 
 >
 <SafeAreaView>
<Text>HEllo</Text>
<Button title="Hide" onPress={hide}/>
</SafeAreaView>
 </Modal>

</View>
<FooterBar/>
</View>
</SafeAreaView>          

)};
  

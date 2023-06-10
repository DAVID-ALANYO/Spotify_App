import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View ,Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import { styles, } from './stylingSheet/mainStyle';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen Section 
import Home from './Screens/Home'
import Premium from './Screens/Premium'
import Search from './Screens/Search'
import Library from './Screens/Library'






const Stack = createNativeStackNavigator();



export default function App ({navigation}) {
  
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
      <Stack.Screen name="Library" component={Library} options={{headerShown: true,title:' ',headerBackVisible:false,

      header: () => (
        
      <SafeAreaView style={{backgroundColor:'#040404fb',}}>
      {/* first line of Design  */}
      <View>

      <View style={styles.Library_Bar}>
      <View style={styles.Library_Bar1}>
      <TouchableOpacity>
        <Image source={require('./Imagebanner/david.jpeg')} style={{width:40,height:40,borderRadius:100,resizeMode:'cover',marginRight:9}}/>
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:20,fontWeight:'700',marginTop:10}}>Your Library </Text>
      </View>
      <View style={styles.Library_Bar1}>
      <TouchableOpacity>
        <Image source={require('./Images/search.png')} style={{width:30,height:30,marginRight:15}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./Images/plus.png')} style={{width:30,height:30}}/>
        </TouchableOpacity>
      </View>
      </View>

      <View style={styles.detail_bar}>
      <TouchableOpacity style={styles.bar}>
      <Text style={styles.text}>Playlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bar}>
      <Text style={styles.text}>Albums</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bar}>
      <Text style={styles.text}>Artists</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bar}>
      <Text style={styles.text}>Downloaded</Text>
      </TouchableOpacity>
        
      </View>
      </View>

      </SafeAreaView>
      
     )
      
      
      }}
      />

      <Stack.Screen name="Premium" component={Premium} options={{headerShown: false}}/>
  
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
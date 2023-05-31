import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
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
      <Stack.Screen name="Library" component={Library} options={{headerShown: true}}/>
      <Stack.Screen name="Premium" component={Premium} options={{headerShown: false}}/>
        
        
        

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
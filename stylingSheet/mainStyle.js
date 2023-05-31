import  {StyleSheet} from "react-native"
import { withTheme } from "react-native-elements";

  const styles =StyleSheet.create ({

pages:{
  flex:1
},
details_section:{

  flex:4,
  backgroundColor:'#000000'
},
footer_section:{
  flex:0.55,
  backgroundColor:'#000000'
},




    mainview:{
      backgroundColor:'#0a0a0a',
      flex:1,
      
      
    },
    mainview2:{
      backgroundColor:'#0a0a0a',
      flex:1,
      
      
    },
      footer_bar:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        margin:35, 
        textAlign:'center'
      },
      icon_position:{
        
      },
      footer_images:{
        width:30,
        height:30,
        margin:5
        
      },
      footer_text:{
        color:'white',
        marginTop:5
        
      },
      main1:{
        flexDirection:'row'
      },
      icons:{
        width:30,
        height:30,
       margin:10
      },
      greeting:{
    fontSize:26,
    color:'white',
    fontWeight:'600',
    fontStyle:'italic'

      },
      card1:{
        justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      marginBottom:10
      },
      card2:{
      justifyContent:'space-evenly',
      flexDirection:'row',
      
      
      },
      banner:{
        backgroundColor:'#171313',
        margin:5,
        flexDirection:'row',
        width:200,
        borderRadius:4,
      
       

      },
      card3:{
        justifyContent:'space-evenly',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:5
  
        },
        note:{
          color:'white',
          margin:10,
         fontWeight:'500'
    

        },
        headings:{
          fontSize:25,
          color:'white',
          fontWeight:'800',
           margin:10,
          
        },
        banner2:{
          width:120,
          height:160,
          alignItems:'center',
        },
        banner2s:{
          color:'white',
          fontWeight:"600",
          fontSize:14,
          textShadowColor:'black',
          marginTop:5,
        },
        subText:{
         color:'white',
         marginLeft:10,
         
        }
        
        
    
    

 
      

 
  

  });

export {styles}






  


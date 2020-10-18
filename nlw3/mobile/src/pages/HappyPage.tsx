import React from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image,Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function HappyPage(){
const navigation = useNavigation();


    function handleGoToMap() {
        navigation.navigate('OrphanagesMap');
        
      }

return(
    <View style={styles.footer} >
    <Image  source = {require('../images/map-marker.png')
     }   style = {styles.Logo}/>
    <Text style = {styles.text}>Happy</Text>
    <TouchableOpacity style={styles.button}> 
       <Feather name="plus" size={24} color="#FFFF" onPress={handleGoToMap}/>
      </TouchableOpacity>


    <Text style = {styles.mensage}>Leve felicidade para o mundo</Text>
    <Text style = {styles.textCity}>Contagem - Minas Gerais</Text>
  </View>
);

};

const styles = StyleSheet.create({
   
    footer:{
      
       
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
       backgroundColor:'#2AB5D1',
       
      },
    
     
      button :{
      marginTop:30,
     marginLeft:150,
        width:60,
        height:60,
        backgroundColor:'#15C3D6',
        borderRadius:17,
        justifyContent:'center',
        alignItems:'center',

      },
      Logo:{
      marginTop:120,
      marginLeft:130,
      justifyContent:'center',
      alignItems:'center',
        
      },
      text:{
        marginLeft:100,
        fontFamily: 'Nunito_700Bold',
        color: '#FFFF',
        fontSize:50,
        justifyContent:'center',
        alignItems:'center'

      },
      textCity:{
        marginTop:70,
        marginLeft:70,
        fontFamily: 'Nunito_700Bold',
        color: '#FFFF',
        fontSize:20,
        

        justifyContent:'center'
      },
      mensage:{
        marginTop:60,
        marginLeft:65,
        fontFamily: 'Nunito_700Bold',
        color: '#FFFF', 
        fontSize:18,
        elevation:10,
        
      }

    })

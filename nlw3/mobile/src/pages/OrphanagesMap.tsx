
import MapView, { Marker,Callout,PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';
import {Feather} from '@expo/vector-icons';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';
import {useNavigation,useFocusEffect} from '@react-navigation/native';
import React,{ useEffect, useState } from 'react';
import api from '../services/api';

interface Orphanage{
  id:number,
  name:string,
  latitude:number,
  longitude:number,
}

export default function OrphanagesMap(){
  const [orphanages,setOrphanages]= useState<Orphanage[]>([]);
    const navigation= useNavigation();

useFocusEffect(()=>{
api.get('orphanages').then(response=>{
setOrphanages(response.data);
});
});
console.log(orphanages);


    function handleNavigateToOrphanageDetails(id:number){
        navigation.navigate('OrphanageDetails', {id});
    }
    function handleNavigateToCreateOrphanage(){
      navigation.navigate('SelectMapPosition');
  }

    return(
        <View style={styles.container}>

      <MapView style = {styles.map} 
           provider={PROVIDER_GOOGLE}
           initialRegion={{
            latitude:-19.9670665,
            longitude:-44.0293898,
            latitudeDelta:0.008,
            longitudeDelta: 0.008,
           }}
      >
        {orphanages.map(orphanage=>{

          return(
            <Marker
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y:0.8 ,
            }}
            coordinate={{
              latitude:orphanage.latitude,
              longitude:orphanage.longitude,
              
            }}
            >
              <Callout tooltip={true} onPress={()=>handleNavigateToOrphanageDetails (orphanage.id)} >
                <View style= {styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}
                  </Text>
                </View>
              </Callout>
              </Marker>
          );
          
        })}
        </MapView>
        <View style = {styles.footer}>
          <Text style = {styles.footerText}>{orphanages.length} Orfanatos encontrados
          </Text>
          <TouchableOpacity style = {styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage} >
          <Feather name = 'plus' size= {20}  colo = '#FFF'/>
          </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
  
    map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  calloutContainer:{
    width:160,
    height:46,
    paddingHorizontal:16,
    backgroundColor:'rgba(255,255,255,0.8)',
    borderRadius:16,
    justifyContent:'center',
   
  },
  calloutText:{
    fontFamily:'Nunito_700Bold',
    color: '#0089a5',
    fontSize:14,
  },
  footer:{
    position:'absolute',
    left:24,
    right:24,
    bottom:32,
  
  
    backgroundColor:'#FFF',
    borderRadius:20,
    height:56,
    paddingLeft:24,
  
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    elevation:10, 
  },
  footerText:{
  fontFamily:'Nunito_700Bold',
  color:'#8fa7b3',
  
  },
  createOrphanageButton:{
    width:56,
    height:56,
    backgroundColor:'#15C3D6',
    borderRadius:17,
  
    justifyContent:'center',
    alignItems:'center',
  
  },
  
  });
  
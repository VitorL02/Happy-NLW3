import React , {useEffect,useState} from 'react';
import mapMarkerImg from '../images/mapmarker.svg'
import{Link} from 'react-router-dom';
import{FiPlus,FiArrowRight} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import Leaflet from  'leaflet';

import 'leaflet/dist/leaflet.css';
import api from '../services/api';


const mapIcon = Leaflet.icon({
    iconUrl:mapMarkerImg,

    iconSize:[52,62],
    iconAnchor:[26,62],
    popupAnchor:[170,2]
})

interface Orphanage{
id: number;
latitude:number;
longitude:number;
name:string;

}

function OrphanagesMap(){


    //Isso faz com que toda vez que o array de orfanatos atualizar o state tambem atualize e assim mostra no mapa os orfanatos
const [orphanages,setOrphanages] = useState<Orphanage[]>([]);
    useEffect(()=> {

api.get('orphanages').then(response=>{
 setOrphanages(response.data);
});

},[] );


    return(
        <div id= "page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>


                    <h2>Escolha um Orfanato no mapa </h2>
                    <p>Muitas Crianças estão esperando sua visita</p>
                </header>

                <footer>
                    <strong>Contagem</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>
            <Map 

            
            center = {[-19.9670607,-44.0294084]} 
            zoom={15}
            style={{ width: '100%', height: '100%'}}

            >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
            />

            {orphanages.map(orphanage=>{
                return(
                    
            <Marker 
            icon={mapIcon}
            position= {[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id} 
            
            >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>

                <FiArrowRight size={28} color = "#FFF"/>

                </Link>
                </Popup>
                </Marker>
                );
            })}



            </Map>
            
           

            <Link to= '/orphanages/create' className='create-orphanage' >
                <FiPlus size = {32} color = "#FFF"/>

            </Link>
        </div>

    );
}
export default OrphanagesMap;
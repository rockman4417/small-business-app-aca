import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import {useParams} from 'react-router-dom'

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { OpenStreetMapProvider } from 'leaflet-geosearch';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;




export default function Map(props) {

    const [results, setResults] = useState()
    

    let id = useParams()

    const globalListing = props.listings.find(listing => listing.id === parseInt(id.id))
    let address = null
    if(globalListing) {
        address = globalListing.address
    } else if(props.localListing) {
        address = props.localListing.address
    }
    
    

      
    useEffect(async ()  => {
        
        const provider = new OpenStreetMapProvider();
        if(address) {

            const results = await provider.search({ query: address + ", Lubbock" });
            if(results[0]){
                setResults(results[0])
            }
        }
    }, [address])
            
    if(results) {
        return (
    
            <MapContainer center={[results.y, results.x]} zoom={12} scrollWheelZoom={false} style={{height: '500px', width: '500px'}}>
                
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
    
                <Marker position={[results.y, results.x]}>
                    <Popup>
                        {globalListing ? globalListing.name : props.localListing.name}
                    </Popup>
                </Marker>
            </MapContainer>
        )
    } else {
        return (
    
            <MapContainer center={[33.5635206, -101.879336]} zoom={12} scrollWheelZoom={false} style={{height: '500px', width: '500px'}}>
                
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        )
    }
}


import React from 'react'
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss"
import Pin from '../pin/Pin';

const Map = ({items}) => {
  return (
    <MapContainer center={items.length === 1 ? [items[0].latitude, items[0].longitude] : [6.5244, 3.3792]}
     zoom={7} scrollWheelZoom={false} className='map'>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {items.map(item=>(
        <Pin item={item} key={item.id}/>
      ))}
    </MapContainer>
  )
}

export default Map
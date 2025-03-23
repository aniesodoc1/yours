import React from 'react';
import "./Pin.scss";
import { Link } from "react-router-dom";
import { Marker, Popup } from 'react-leaflet';

const Pin = ({ item }) => {
  console.log(item);

  // Check if the first media is an image or video
  const firstMedia = item.images[0] || item.videos[0];
  const isVideo = firstMedia?.endsWith('.mp4') || firstMedia?.endsWith('.webm') || firstMedia?.endsWith('.ogg');

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className='popupContainer'>
          {isVideo ? (
            <video src={firstMedia} autoPlay loop controls width="100%" />
          ) : (
            <img src={firstMedia} alt="Media" />
          )}
          <div className='textContainer'>
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
            <span>{item.address}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;

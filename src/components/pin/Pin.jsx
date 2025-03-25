import React from "react";
import "./Pin.scss";
import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icons to prevent issues after deployment
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Pin = ({ item }) => {
  console.log(item);

  // Check if the first media is an image or video
  const firstMedia = item.images[0] || item.videos[0];
  const isVideo =
    firstMedia?.endsWith(".mp4") ||
    firstMedia?.endsWith(".webm") ||
    firstMedia?.endsWith(".ogg");

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup minWidth={250} maxWidth={300} autoPan={true}>
        <div className="popupContainer">
          {isVideo ? (
            <video src={firstMedia} autoPlay loop controls width="100%" />
          ) : (
            <img src={firstMedia} alt="Media" style={{ width: "100%", height: "auto" }} />
          )}
          <div className="textContainer">
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

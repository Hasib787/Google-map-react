import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 23.807503573687367,
  lng: 90.36833299690454,
};


const MyLocation = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker  position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MyLocation;

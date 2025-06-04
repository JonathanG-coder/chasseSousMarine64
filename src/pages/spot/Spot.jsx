// https://github.com/tomickigrzegorz/react-leaflet-examples
// Lien GitHub du code pour la map personnalisée

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import pinIcon from "../../assets/pin.png";
import "./Spot.css"; // 

// Coordonnées de Saint-Jean-de-Luz (64, France)
const position = [43.3889, -1.6614];

// Icône personnalisée
const customIcon = new L.Icon({
  iconUrl: pinIcon,
  iconSize: [30, 35],       // taille réduite
  iconAnchor: [15, 35],     // ajusté pour garder le point bas au bon endroit
  popupAnchor: [0, -35],    // ajuste la position du popup
});

const Spot = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={customIcon}>
          <Popup>
            <figure>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/A-10_Sukiennice_w_Krakowie_Krak%C3%B3w%2C_Rynek_G%C5%82%C3%B3wny_MM.jpg/1920px-A-10_Sukiennice_w_Krakowie_Krak%C3%B3w%2C_Rynek_G%C5%82%C3%B3wny_MM.jpg"
                alt="Kraków"
                width="100%"
              />
              <figcaption>Source: wikipedia.org</figcaption>
            </figure>
            Saint-Jean-de-Luz, une ville charmante de la Côte Basque 🇫🇷
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Spot;

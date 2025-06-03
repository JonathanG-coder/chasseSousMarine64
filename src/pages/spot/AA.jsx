import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import pinIcon from "../../assets/pin.png"; 

// Coordonnées de Saint-Jean-de-Luz (64, France)
const position = [43.3889, -1.6614];

// Icône personnalisée
const customIcon = new L.Icon({
  iconUrl: pinIcon,
  iconSize: [50, 58],
  iconAnchor: [20, 58],
  popupAnchor: [0, -60],
});

const Spot = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
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
            Saint-Jean-de-Luz, une ville charmante de la Côte Basque 🇫🇷
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Spot;

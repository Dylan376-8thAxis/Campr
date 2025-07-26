import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Campsite } from '../../types/campsite';

interface CampsiteMapProps {
  campsites: Campsite[];
}

const CampsiteMap: React.FC<CampsiteMapProps> = ({ campsites }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {campsites.map(campsite => (
        <Marker key={campsite.id} position={[campsite.location.latitude, campsite.location.longitude]}>
          <Popup>
            <strong>{campsite.name}</strong><br />
            {campsite.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CampsiteMap;
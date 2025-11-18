import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { Offer } from '../mocks/offers';

interface MapProps {
  offers: Offer[];
  activeOfferId: number | null;
}

const defaultIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
});

const activeIcon = L.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
});

const Map: React.FC<MapProps> = ({ offers, activeOfferId }) => {
  if (offers.length === 0) {
    return null;
  }

  const center = [offers[0].location.lat, offers[0].location.lng] as [number, number];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers.map((offer) => (
        <Marker
          key={offer.id}
          position={[offer.location.lat, offer.location.lng]}
          icon={offer.id === activeOfferId ? activeIcon : defaultIcon}
        />
      ))}
    </MapContainer>
  );
};

export default Map;

import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../mocks/offers';

interface MapProps {
  offers: Offer[];
}

const Map: React.FC<MapProps> = ({ offers }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const city = {
      lat: 52.38333,
      lng: 4.9,
      zoom: 12,
    };

    const map = leaflet.map(mapRef.current, {
      center: [city.lat, city.lng],
      zoom: city.zoom,
    });

    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      })
      .addTo(map);

    const icon = leaflet.icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-green.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    offers.forEach((offer) => {
      leaflet
        .marker({
          lat: offer.location.lat,
          lng: offer.location.lng,
        }, { icon })
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [offers]);

  return <div ref={mapRef} style={{ height: '100%', minHeight: '500px', width: '100%' }} />;
};

export default Map;

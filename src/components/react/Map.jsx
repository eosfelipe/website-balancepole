import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1IjoiZW9zZmVsaXBlIiwiYSI6ImNsZGJ1dDhubDAxN3Qzd3FoMDZmNm5udzIifQ.DWjc_jE2zSY0IUOLKQo94Q';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(21.01026535013217);
  const [lng, setLng] = useState(-89.61088544642402);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      '<a href="https://goo.gl/maps/hBCHMyLVNCJ7jKSN7" style="color:#652466;" target="_blank">Balance Pole Fitness</a>'
    );
    const marker = new mapboxgl.Marker({ color: '#652466' })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(map.current);
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h2 className="max-w-lg mb-4 text-3xl font-bold leading-none md:tracking-tight sm:text-4xl md:mx-auto font-heading text-center">
            Ubicación
          </h2>
          <h3 className="mb-4 text-xl font-bold text-center">
            Calle 28 #354 por 33 y 35, Emiliano Zapata Nte, 97129, Mérida, Yuc.
          </h3>
          <div className="max-w-3xl mx-auto p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600">
            <div ref={mapContainer} className="w-full h-[400px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

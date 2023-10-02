import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const OpenLayersMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    let map: Map | null = null;

    if (mapContainerRef.current && !map) {
      map = new Map({
        target: mapContainerRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });

      // Tambahkan event listener untuk membersihkan map saat komponen dibongkar
      return () => {
        if (map && map.getTarget() === mapContainerRef.current) {
          map.setTarget(undefined); // Hapus elemen target
        }
      };
    }
  }, []);

  return (
    <div>
      <h1>Contoh Peta OpenLayers</h1>
      <div ref={mapContainerRef} style={{ width: '400px', height: '400px' }}></div>
    </div>
  );
};

export default OpenLayersMap;

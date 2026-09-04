import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

// Fix default icon issue in some builds
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
})

export default function Map({ markers = [] }){
  useEffect(()=>{
    // Leaflet CSS is imported via the component
  }, [])

  const center = markers.length ? [markers[0].lat, markers[0].lng] : [48.8566, 2.3522]

  return (
    <MapContainer center={center} zoom={4} className="h-full rounded">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((m,i)=> (
        <Marker key={i} position={[m.lat,m.lng]}>
          <Popup>
            <strong>{m.venue}</strong><br />{m.date} — {m.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

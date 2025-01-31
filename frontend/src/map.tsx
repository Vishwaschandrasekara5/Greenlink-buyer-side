"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export default function Map() {
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize map
      const map = L.map("map").setView([7.8731, 80.7718], 8) // Center on Sri Lanka

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map)

      // Add container markers
      const container1 = L.marker([7.9, 80.2]).bindPopup("Container 1").addTo(map)

      const container2 = L.marker([7.8, 81.2]).bindPopup("Container 2").addTo(map)

      mapRef.current = map
    }
  }, [])

  return <div id="map" className="h-full w-full" />
}


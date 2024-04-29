import React, { useEffect, useState } from 'react';

// Google Maps API key (replace 'YOUR_API_KEY' with your actual API key)
const GOOGLE_MAPS_API_KEY = 'AIzaSyCjSXNAi8GFCToY1e9tlKg2GaYb8KUSf9U';

const GoogleMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Load the Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = initializeMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      zoom: 15,
      center: { lat: 34.5835789, lng: -118.1404100 }, // Replace with your location coordinates
    };
    const mapInstance = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    setMap(mapInstance);

    // Add a marker to the map
    const marker = new window.google.maps.Marker({
      position: { lat: 34.5835789, lng: -118.1404100 }, // Replace with your location coordinates
      map: mapInstance,
      title: 'Your Location',
    });

    // Add a click event listener to the marker
    marker.addListener('click', () => {
      // Open directions in a new tab
      window.open(`https://www.google.com/maps/dir/?api=1&destination=34.5835789,-118.1404100`);
    });
  };

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default GoogleMap;

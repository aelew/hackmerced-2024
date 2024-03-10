import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useAppContext } from '../AppContext';
import search from '../assets/search.png';

export default function Search() {
  const inputRef = useRef();

  const map = useMap();
  const { setPlace } = useAppContext();

  const places = useMapsLibrary('places');
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null);

  const handlePlaceUpdate = useCallback(
    (place) => {
      if (!place.geometry) {
        alert('No data available for that location. Please try again.');
        return;
      }
      setPlace(place);
      console.log('place updated', place);
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      }
    },
    [map, setPlace]
  );

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address']
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places, inputRef]);

  useEffect(() => {
    if (!placeAutocomplete) return;
    placeAutocomplete.addListener('place_changed', () => {
      const place = placeAutocomplete.getPlace();
      handlePlaceUpdate(place);
      inputRef.current.value = '';
    });
  }, [placeAutocomplete, handlePlaceUpdate]);

  if (!map) {
    return null;
  }
  return (
    <div className="search-bar">
      <input type="text" placeholder="Enter a location" ref={inputRef} />
      <input type="image" src={search} width="25px" />
    </div>
  );
}

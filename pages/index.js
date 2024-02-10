/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getHotels } from '../api/hotelData';
// import { useAuth } from '../utils/context/authContext';
import HotelCard from '../components/HotelCard';

function Home() {
  // TODO: Set a state for hotels
  const [hotels, setHotels] = useState([]);

  // TODO: Get user ID using useAuth Hook
  // const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the hotels
  const getAllTheHotels = () => {
    getHotels().then(setHotels);
  };

  // TODO: make the call to the API to get all the hotels on component render
  useEffect(() => {
    getAllTheHotels();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* TODO: map over hotels here using HotelCard component */}
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotelObj={hotel} onUpdate={getAllTheHotels} />
        ))}
      </div>

    </div>
  );
}

export default Home;

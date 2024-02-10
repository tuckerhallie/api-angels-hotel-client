import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';

function HotelCard({ hotelObj }) {
  const router = useRouter();
  function hotelDetails(id) {
    router.push(`hotels/${id}`);
  }
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <div id="room-images">
        {hotelObj.images.map((image) => (
          <Card.Img variant="top" key={image} src={image} alt={hotelObj.name} style={{ height: '200px' }} />
        ))}
      </div>
      <Card.Body>
        <Card.Title>{hotelObj.name}</Card.Title>
        <p className="card-text bold"> {hotelObj.address}, {hotelObj.city}  {hotelObj.amenities}, {hotelObj.rating} </p>
        <Button variant="primary" onClick={() => hotelDetails(hotelObj.id)} type="info">
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}

HotelCard.propTypes = {
  hotelObj: PropTypes.shape({
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    address: PropTypes.string,
    city: PropTypes.string,
    amenities: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default HotelCard;

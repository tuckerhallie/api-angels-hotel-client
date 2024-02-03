import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

function HotelCard({ hotelObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={hotelObj.image} alt={hotelObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{hotelObj.name}</Card.Title>
        <p className="card-text bold"> ${hotelObj.city}</p>
        <Link href={`/hotels/${hotelObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/hotels/edit/${hotelObj.id}`} passHref>
          <Button variant="info">DETAILS</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

HotelCard.propTypes = {
  hotelObj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    amenities: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default HotelCard;

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

function RoomCard({ roomObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={roomObj.images} alt={roomObj.room_type} style={{ height: '400px' }} />
      <Card.Body>
        <p className="card-text font-weight-bold"> ${roomObj.room_type}</p>
        <p className="card-text font-weight-bold"> ${roomObj.price_per_night}</p>
        <p className="card-text"> Room Number: {roomObj.room_number}</p>
        <p className="card-text"> Hotel ID: {roomObj.hotel_id}</p>
        {/* need to navigate to the bookings page */}
        <Link href={`/bookings/${roomObj.id}`} passHref>
          <Button variant="info">BOOK THIS ROOM</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

RoomCard.propTypes = {
  roomObj: PropTypes.shape({
    images: PropTypes.string,
    room_type: PropTypes.string,
    room_number: PropTypes.number,
    price_per_night: PropTypes.number,
    hotel_id: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default RoomCard;

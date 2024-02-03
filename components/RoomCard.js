import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

function RoomCard({ roomObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={roomObj.image} alt={roomObj.type} style={{ height: '400px' }} />
      <Card.Body>
        <p className="card-text bold"> ${roomObj.type}</p>
        <p className="card-text bold"> ${roomObj.price_per_day}</p>
        {/* <Link href={`/rooms/${roomObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link> */}
        <Link href={`/bookings/${roomObj.id}`} passHref>
          <Button variant="info">BOOK THIS ROOM</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

RoomCard.propTypes = {
  roomObj: PropTypes.shape({
    image: PropTypes.string,
    type: PropTypes.string,
    room: PropTypes.number,
    price_per_day: PropTypes.number,
    hotel: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default RoomCard;

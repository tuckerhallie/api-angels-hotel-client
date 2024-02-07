import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getRooms } from '../../api/roomData';

function SingleHotel() {
  const [rooms, setRooms] = useState([]);
  const router = useRouter();
  const { hotelId } = router.query;

  useEffect(() => {
    getRooms(hotelId).then((data) => {
      setRooms(data);
    });
  }, []);

  const goToBooking = () => {
    router.push(`/hotels/${hotelId}/booking`);
  };

  return (
    <article className="room p-3">
      <h1>Rooms Types</h1>
      <Card style={{ width: '18rem' }} className="card-color">
        {rooms ? (
          rooms.map((hotelroom) => (
            <div key={hotelroom.id} className="d-flex justify-content-start gap-3">
              <span>{hotelroom.room_type}</span>
              <Card.Body>
                <Card.Img variant="top" src={hotelroom.images} alt={hotelroom.name} style={{ height: '400px' }} />
                <Card.Text>{hotelroom.price_per_night}</Card.Text>
              </Card.Body>
            </div>
          ))
        ) : (<div>No Rooms</div>)}
        <Button variant="success" type="payment" onClick={goToBooking}>
          Book
        </Button>
      </Card>
    </article>
  );
}

export default SingleHotel;

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
  }, [hotelId]);

  const goToBooking = (roomId) => {
    router.push(`/bookings/new?roomId=${roomId}`);
  };

  return (
    <article className="room p-3">
      <h1>Rooms Types</h1>
      <Card style={{ width: '18rem' }} className="card-color">
        {rooms ? (
          rooms.map((hotelRoom) => (
            <>
              <div key={hotelRoom.id} className="d-flex justify-content-start gap-3">
                <Card.Body>
                  <div id="room-images">
                    {hotelRoom.images.map((image) => (
                      <Card.Img variant="top" src={image} key={image} id="room-img" alt={hotelRoom.name} style={{ height: '200px' }} />
                    ))}
                  </div>
                  <Card.Text>{hotelRoom.room_type}</Card.Text>
                  <Card.Text>{hotelRoom.price_per_night}</Card.Text>
                </Card.Body>
              </div>
              <Button variant="success" type="payment" onClick={() => goToBooking(hotelRoom.id)}>
                Book
              </Button>
            </>
          ))
        ) : (<div>No Rooms</div>)}

      </Card>
    </article>
  );
}

export default SingleHotel;

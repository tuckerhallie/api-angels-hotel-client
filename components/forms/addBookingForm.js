import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { updateBooking, createNewBooking } from '../../api/bookingData';
import { getSingleRoom } from '../../api/roomData';

const initialState = {
  check_in: '',
  check_out: '',
  no_of_guests: '',
  total_amount: '',
  payment_type: '',
  room_id: 0,
  user_id: 0,
};

const BookingForm = ({ bookingObj }) => {
  const [formInput, setFormInput] = useState(initialState);
  const [room, setRoom] = useState([]);
  const router = useRouter();
  const { roomId } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    getSingleRoom(roomId).then((data) => setRoom(data));
    if (bookingObj.id) {
      setFormInput({
        id: bookingObj.id,
        user_id: bookingObj.user.id,
        room_id: bookingObj.room.id,
        check_in: bookingObj.check_in,
        check_out: bookingObj.check_out,
        no_of_guests: bookingObj.no_of_guests,
        total_amount: bookingObj.total_amount,
        payment_type: bookingObj.payment_type,
      });
    }
  }, [bookingObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingObj.id) {
      const update = {
        id: bookingObj.id,
        user_id: user.id,
        room_id: room.id,
        check_in: formInput.check_in,
        check_out: formInput.check_out,
        no_of_guests: formInput.no_of_guests,
        total_amount: formInput.total_amount,
        payment_type: formInput.payment_type,
      };

      updateBooking(update).then(() => router.push('/bookings'));
    } else {
      const booking = {
        user_id: user.id,
        room_id: room.id,
        check_in: formInput.check_in,
        check_out: formInput.check_out,
        no_of_guests: formInput.no_of_guests,
        total_amount: formInput.total_amount,
        payment_type: formInput.payment_type,
      };
      createNewBooking(booking).then(() => router.push('/bookings'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Check In</Form.Label>
        <Form.Control
          type="date"
          name="check_in"
          value={formInput.check_in}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> Check Out</Form.Label>
        <Form.Control
          type="date"
          name="check_out"
          placeholder="Check-Out"
          value={formInput.check_out}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> Number of Guests </Form.Label>
        <Form.Select
          name="no_of_guests"
          required
          value={formInput.no_of_guests}
          onChange={handleChange}
        >
          <option value="">Add Guests</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> Total Amount </Form.Label>
        <Form.Control
          name="total_amount"
          value={formInput.total_amount}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Payment Type</Form.Label>
        <Form.Select
          name="payment_type"
          required
          value={formInput.payment_type}
          onChange={handleChange}
        >
          <option value="">Select an payment type</option>
          <option value="Cash">Cash</option>
          <option value="Mobile">Mobile</option>
          <option value="Credit">Credit</option>
          <option value="PayPal">PayPal</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit">{bookingObj.id ? 'Update' : 'Confirm'} Booking </Button>
    </Form>
  );
};

BookingForm.propTypes = {
  bookingObj: PropTypes.shape({
    id: PropTypes.number,
    room: PropTypes.number,
    user: PropTypes.number,
    check_in: PropTypes.string,
    check_out: PropTypes.string,
    no_of_guests: PropTypes.number,
    total_amount: PropTypes.number,
    payment_type: PropTypes.string,
  }),
};

BookingForm.defaultProps = {
  bookingObj: initialState,
};

export default BookingForm;

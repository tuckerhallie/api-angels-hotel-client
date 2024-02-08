import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { updateBooking, createNewBooking } from '../../api/bookingData';

const initialState = {
  check_in: '',
  check_out: '',
  no_of_guests: '',
  total_amount: '',
  payment_type: '',
};

function BookingForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.room_id) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.room_id) {
      updateBooking(formInput).then(() => router.push(`/bookings/${obj.room_id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createNewBooking(payload).then(({ name }) => {
        const patchPayload = { id: name };
        updateBooking(patchPayload).then(() => {
          router.push('/bookings');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.room_id ? 'Update' : 'Create'} </h2>
      <FloatingLabel controlId="floatingInput1" label="Check-In" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Check-In"
          name="check_in"
          value={formInput.check_in}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Check-Out" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Check-Out"
          value={formInput.check_out}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="No_of_Guests" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Number of Guests"
          name="Number of Guests"
          value={formInput.number_of_guests}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Total Amount" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Total Amount"
          name="total"
          value={formInput.total_amount}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Favorite"
        checked={formInput.favorite}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            favorite: e.target.checked,
          }));
        }}
      />*/
      <Button type="submit">{obj.room_id} Submit</Button>
    </Form>
  );
}

BookingForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    room_id: PropTypes.number, // map thru rooms
    user_id: PropTypes.number,
    check_in: PropTypes.string,
    check_out: PropTypes.string,
    number_of_guests: PropTypes.number,
    total_amount: PropTypes.number,
    payment_type: PropTypes.string,
  }),
};

BookingForm.defaultProps = {
  obj: initialState,
};

export default BookingForm;

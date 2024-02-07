/* import React, { useEffect, useState } from 'react';
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
    if (obj.id) setFormInput(obj);
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
    if (obj.id) {
      updateBooking(formInput).then(() => router.push(`/bookings/${obj.id}`));
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
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} </h2>
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Check-In"
          name="first_name"
          value={formInput.first_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={formInput.last_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Email"
          name="email"
          value={formInput.email}
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
      />
      <Button type="submit">{obj.id} Submit</Button>
    </Form>
  );
}

BookingForm.propTypes = {
  obj: PropTypes.shape({
    booking: PropTypes.number,
    user: PropTypes.number,
    room: PropTypes.number,
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
*/

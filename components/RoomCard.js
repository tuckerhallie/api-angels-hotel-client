// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { useAuth } from '../../utils/context/authContext';
// // import {  } from '../../api/authorData'; CHANGE THIS TO ROOMDATA

// const initialState = {
//   first_name: '',
//   last_name: '',
//   email: '',
//   favorite: false,
// };

// function AuthorForm({ obj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const router = useRouter();
//   const { user } = useAuth();

//   useEffect(() => {
//     if (obj.firebaseKey) setFormInput(obj);
//   }, [obj, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (obj.firebaseKey) {
//       updateAuthor(formInput).then(() => router.push(`/author/${obj.firebaseKey}`));
//     } else {
//       const payload = { ...formInput, uid: user.uid };
//       createAuthor(payload).then(({ name }) => {
//         const patchPayload = { firebaseKey: name };
//         updateAuthor(patchPayload).then(() => {
//           router.push('/authors');
//         });
//       });
//     }
//   };

//   return (
//   <Card style={{ width: '18rem', margin: '10px' }}>
//   <Card.Img variant="top" src={bookObj.image} alt={bookObj.title} style={{ height: '400px' }} />
//   <Card.Body>
//     <Card.Title>{bookObj.title}</Card.Title>
//     <p className="card-text bold">{bookObj.sale && <span>SALE<br /></span> } ${bookObj.price}</p>
//     {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
//     <Link href={`/book/${bookObj.firebaseKey}`} passHref>
//       <Button variant="primary" className="m-2">VIEW</Button>
//     </Link>
//     {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
//     <Link href={`/book/edit/${bookObj.firebaseKey}`} passHref>
//       <Button variant="info">EDIT</Button>
//     </Link>
//     <Button variant="danger" onClick={deleteThisBook} className="m-2">
//       DELETE
//     </Button>
//   </Card.Body>
// </Card>
// );
// }

// AuthorForm.propTypes = {
//   obj: PropTypes.shape({
//     description: PropTypes.string,
//     image: PropTypes.string,
//     price: PropTypes.string,
//     sale: PropTypes.bool,
//     title: PropTypes.string,
//     author_id: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }),
// };

// AuthorForm.defaultProps = {
//   obj: initialState,
// };

// export default AuthorForm;

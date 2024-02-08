/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

function UserProf() {
  const { user } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // added the rest of this code on the bottom from Signin.js to look centered in page but not needed. Just cosmetic
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      {/* <img src="/placeholder-image.jpg" alt="user" width="100px" height="100px" /> */}
      <h1>{user.first_name} {user.last_name}</h1>
      <h3 className="bio">{user.bio}</h3>
      <h2>Email: {user.email}</h2>
      <Button type="button" size="lg" className="signout-btn" onClick={signOut}>Sign Out</Button>
    </div>
  );
}

UserProf.propTypes = {
  userObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProf;

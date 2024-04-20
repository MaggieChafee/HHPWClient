/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '75vh', padding: '30px' }}>
      <img src="/Logo.png" alt="logo" className="nav-logo" width="200" height="200" /><br /><br />
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button type="button" size="lg" className="btn-order-card" variant="dark" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;

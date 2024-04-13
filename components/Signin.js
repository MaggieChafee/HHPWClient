/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', padding: '30px' }}>
      <img src="/Logo.png" alt="logo" className="nav-logo" width="400" height="400" /><br /><br />

      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;

/* eslint-disable @next/next/no-img-element */
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <img src="/Logo.png" alt="logo" width="300" height="300" />
      <h1>Hello {user.fbUser.displayName}! </h1>
      <br />
      <Link passHref href="/orders/all">
        <Button variant="dark">View All Orders</Button>
      </Link>
      <br />
      <Link passHref href="/orders/new">
        <Button variant="dark">Start a New Order</Button>
      </Link>
      <br />
      <Link passHref href="/revenue">
        <Button variant="dark">View Revenue</Button>
      </Link>
    </div>
  );
}

export default Home;

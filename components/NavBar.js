/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Link passHref href="/">
            <Navbar.Brand><img src="/Logo.png" alt="logo" width="125" height="125" /></Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/orders/all">
              <Nav.Link>View All Orders</Nav.Link>
            </Link>
            <Link passHref href="/orders/new">
              <Nav.Link>Start an Order</Nav.Link>
            </Link>
            <Link passHref href="/revenue">
              <Nav.Link>View Revenue</Nav.Link>
            </Link>
          </Nav>
          <Button variant="dark" className="btn-order-card" onClick={signOut}>
            Sign Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

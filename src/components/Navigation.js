import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles/navigation.css'; // Import your CSS file

function Navigation({ onSearch, onFilterRating }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleRatingChange = (rating) => {
    onFilterRating(rating);
  };

  return (
    <Navbar className='nav' expand="lg" sticky="top">
      <Container>
        <Navbar.Brand id='navText' href="#home">
          <img
            alt=""
            src="./video.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}Dhanush
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='navText' href="#home">Home</Nav.Link>
            <Nav.Link id='navText' href="#link">Movies A-Z</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Write a Review</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Signup</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Filter by Rating" id="rating-nav-dropdown">
              <NavDropdown.Item onClick={() => handleRatingChange(0)}>All Ratings</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(1)}>1 Star & Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(2)}>2 Stars & Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(3)}>3 Stars & Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(4)}>4 Stars & Up</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleRatingChange(5)}>5 Stars Only</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search movies..."
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={handleInputChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

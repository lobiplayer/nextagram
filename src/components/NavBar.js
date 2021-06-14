import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { useHistory } from "react-router-dom";
import SignInModal from './SignInModal'
import UploadImageModal from './UploadImageModal';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory()

  //has to be deleted and have to make a toggle with usestate instead.
const hideShowMyProfile = () => {
  if (localStorage.getItem('userID') === '') {
    return { display: 'none'}
  }
  
}
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand onClick={() => { history.push("/") }}>Nextagram</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={() => { history.push("/") }}> Home</NavLink>
            </NavItem>
            <NavItem >
              <NavLink style={hideShowMyProfile()}  onClick={() => { history.push("/users/"+ localStorage.getItem('userID')) }}>My Profile</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink onClick={() => { history.push("/signup") }}>Sign Up</NavLink>
            </NavItem> */}

          </Nav>
          {/* <NavbarText>Hey!</NavbarText> */}
        </Collapse>
        <UploadImageModal />
        <SignInModal />

      </Navbar>
    </div>
  );
}

export default NavBar;
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaCaretDown } from "react-icons/fa";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { GoHeartFill } from "react-icons/go";
import homeLogo from '../images/homelogo.png';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleCategoryClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Nav>
        <LogoLink to="/signin">
          <Logo src={homeLogo} alt="Logo" />
        </LogoLink>
        <NavLink to="/signup">
          <FaHome />
          <span>Home</span>
        </NavLink>
        <CategoryContainer onClick={handleCategoryClick} ref={dropdownRef}>
          <span>Category</span>
          <FaCaretDown />
          {dropdownVisible && (
            <Dropdown>
              <DropdownLink to="/Movies">Movies</DropdownLink>
              <DropdownLink to="/Comics">Comics</DropdownLink>
            </Dropdown>
          )}
        </CategoryContainer>
        <NavLink to="/AboutUs">
          <span>About Us</span>
          <AiOutlineAliwangwang />
        </NavLink>
        <NavLink to="/AboutUs">
          <span>Favorites</span>
          <GoHeartFill />
        </NavLink>
      </Nav>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  height: 100vh;
  background: none; 
  padding-top: 0px; 
`;

const Nav = styled.nav`
  width: 100%;
  background-color: black; 
  padding: 10px 0 ;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: 1000; 
  height: 60px;
`;

const LogoLink = styled(Link)`
  margin-right: 15px;
`;

const Logo = styled.img`
  height: 50px;
  width: 200px;
`;

const NavLink = styled(Link)`
  color: #fff; 
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;

  &:hover {
    color: blue; 
  }

  span {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const CategoryContainer = styled.div`
  color: #fff; 
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const Dropdown = styled.div`
  background-color: #fff; 
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px; 
  z-index: 1000;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  `;

const DropdownLink = styled(Link)`
  color: #000;
  padding: 10px;
  display: block;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Navbar;
  
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menueData } from "../../data/menueData";
import { Button } from "./button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;

  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 3;
  width: 100vw;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;
  text-decoration: none;
`;
const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
const MenueBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    height: 35px;
    width: 35px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    transform: translate(-50%, 35%);
  }
`;
const NavMenue = styled.div`
display:flex;
align items-center;
justify-content:center;
margin-right:-48px;

@media screen and (max-width:768px){
    display:none;
}`;

const NavMenueLinks = styled(Link)`
  ${NavLink}
`;
const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Bi</Logo>
      <MenueBars />
      <NavMenue>
        {menueData.map((item, index) => {
          return (
            <NavMenueLinks to={item.link} key={index}>
              {item.title}
            </NavMenueLinks>
          );
        })}
      </NavMenue>
      <NavBtn>
        <Button primary="true" to="/contact">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;

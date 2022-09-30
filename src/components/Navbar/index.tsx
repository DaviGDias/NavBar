import {useState} from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./Navbar.elements";
import {FaBars, FaTimes } from 'react-icons/fa'
import {GiAtom} from 'react-icons/gi'
import { IconContext } from "react-icons";



export function Navbar() {
   const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>

                    <LogoContainer>
                        <GiAtom />
                        <p>Davi Dias -</p>
                        <p>Dev</p>
                    </LogoContainer>
                    <MobileIcon onClick={() =>setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink>HOME</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>ABOUT ME</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>PORTIFOLIO</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>CONTACT ME</MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}
import React from 'react';
import {IconFacebook, IconTwitter, IconInstagram, IconYouTube} from '../../containers/Icons';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';


const Footer = () => {
    return(
        <FooterStyle className="main-footer mt-5 pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="small">
                            &copy;{new Date().getFullYear()} At Altitude - All rights reserved
                        </p>
                    </div>
                    <div className="col">    
                    <Nav className="ml-auto float-right" >
                        <Nav.Link href="#"><IconStyle><IconFacebook/></IconStyle></Nav.Link>
                        <Nav.Link href="#pricing"><IconStyle><IconInstagram/></IconStyle></Nav.Link>
                        <Nav.Link href="#features"><IconStyle><IconTwitter/></IconStyle></Nav.Link>
                        <Nav.Link href="#"><IconStyle><IconYouTube/></IconStyle></Nav.Link>
                    </Nav>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer;

//Styled components

const FooterStyle = styled.div`
    background-color: var(--footerBackground);
`;

const IconStyle = styled.div`
    color: var(--footerIcon);

    IconFacebook {
        &:hover: var(--footerIconHover);
    }
`;
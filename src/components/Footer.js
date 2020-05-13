import React from 'react';
import './Footer.css';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(faHeart, faHeartRegular, faHeartSolid);

const Footer = props => {
  return (
    <footer className="footer">
      <h1>
        {props.message} <FontAwesomeIcon icon={faHeart} /> by{' '}
        <a href="">{props.devName}</a>
      </h1>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <button 
        className={classes.DrawerToggle}
        onClick={props.clicked}
    >
        <FontAwesomeIcon icon={faBars} />
    </button>
);

export default drawerToggle;
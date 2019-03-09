import React from 'react';
import {withTheme} from './ThemeProvider' //with theme is a higher order component

const Header = (props) => {
    return (
        <div className={props.on ? "dark" : "light"}>
          {props.title}
          <button onClick={props.toggle}>{props.on ? "Switch to light" : "Switch to dark!"}</button>
        </div>
    );
};

export default withTheme(Header);
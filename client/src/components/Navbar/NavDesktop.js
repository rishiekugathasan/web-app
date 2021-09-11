import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import ScaleText from "react-scale-text";

import 'react-bootstrap';
import '../../css/Navbar.css';


class NavDesktop extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

// make mobile view as well w 3 bars + dropdown 

    render(){
    const NavLi = (props) => (
        <ScaleText minFontSize={24} maxFontSize={32} >
          <span style={{color: '#004c54', textAlign:"start", fontWeight:'600'}}>{props.link}</span>
        </ScaleText>
      );
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Somethinf<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i  className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        // if(index==2){
                        //     return(
                        //         <img src={item.img} href={item.url} alt={item.img} className={item.cName}></img>
                        //     )
                        // }
                        
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {/* {item.title} */}
                                <NavLi link={item.title} />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            
            </nav>
        )
    }
}

export default NavDesktop
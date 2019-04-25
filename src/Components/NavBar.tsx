import * as React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends React.Component {
    public render(){
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Contact Me</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Github</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">LinkedIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Twitter</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
export default NavBar;

import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        sideDrawerShow: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({sideDrawerShow: false});
    }

    openSideDrawerHandler = () => {
        this.setState(prevState => {
          return  { sideDrawerShow: !prevState.sideDrawerShow }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar show={this.openSideDrawerHandler}/>
                <SideDrawer 
                    open={this.state.sideDrawerShow} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}
export default Layout
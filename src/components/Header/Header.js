import { Switch } from "@mui/material";
import React from "react";
import './Header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="title">
                    <h1>Emilly Lamotte</h1>
                </div>
              <Switch/>
            </div>  
            
            );
    }

}
export default Header;
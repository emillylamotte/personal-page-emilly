import React from "react";
import './Header.css'


class Header extends React.Component{
    render(){
        return(
            <div className="container">
                <div class="title">
                    <h1>Emilly Lamotte</h1>
                </div>
                <div className="switch-button">
                    <button>Noturno</button>
                </div>
            </div>  
            
            );
    }
    
    

}
export default Header;
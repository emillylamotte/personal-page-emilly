import React from "react";
import './Shortcut.css';

class Shortcut extends React.Component{
    render(){
        return(
            <div className="shortcut-button">
                <button onClick={()=>{window.location.href = `${this.props.atalho}`}}>{this.props.name}</button>
            </div>
          
            
          );
    }
    
}

export default Shortcut;
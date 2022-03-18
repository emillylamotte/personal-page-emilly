import React from "react";
import './Profile.css';

class Profile extends React.Component{
  render(){
    return(
      <div className="profile">
        <img  alt="Foto de perfil" src={`${this.props.picture}`}></img>
        <p>{`${this.props.description}`}</p>
      </div>  
    );
  }
    
}
export default Profile;
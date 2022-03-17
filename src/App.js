import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Shortcut from './components/Shortcut/Shortcut';
import Picture from './assets/profile-emilly.jpg';
import Footer from './components/Footer/Footer';


class App extends React.Component{
  render(){
    return (
    
      <body>
        <Header/>
        <Profile picture={Picture} description={"Estagiária de Engenharia de Software na Xp Inc."}/>
        <Shortcut name={'LinkedIn'} atalho={'https://www.linkedin.com/in/emilly-lamotte-4b55a2182/'}/>
        <Shortcut name={'Portfólio'} atalho={''}/>
        <Shortcut name={'GitHub'} atalho={'https://github.com/emillylamotte'}/>
        <Shortcut name={'Facebook'} atalho={'https://www.facebook.com/emilly.lamotte'}/>
        <Footer/>
        
       
      </body> 
    );
  }
  
}

export default App;

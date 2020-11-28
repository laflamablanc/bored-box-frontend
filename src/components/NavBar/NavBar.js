import {NavLink} from 'react-router-dom'
import React from 'react'
import { MenuItems } from './MenuItems'
import './NavBar.css'
import { useHistory } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  backgroundColor: "#ff6a00",
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'futura',
}

const NavBar = () => {

  let history = useHistory()

  function handleClick(){
    history.push("/")
  }

  return(
    <nav className="NavBarItems">
      <img className = "NavBarLogo" src="/logo.png" onClick={handleClick}/>
      <div className ="menu-icon">
      </div>
      <ul className = "NavMenu">
        {MenuItems.map(item => <NavLink to={item.url} exact style={link} activeStyle={{color: 'white'}}>{item.title}</NavLink>)}
      </ul>
    </nav>
  )
}


//
//
// const NavBar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       style={link}
//       activeStyle={{
//         color: 'white'
//       }}
//     >Home</NavLink>
//
//     <NavLink
//       to="/quiz"
//       exact
//       style={link}
//       activeStyle={{
//         color: 'white'
//       }}
//     >Quiz</NavLink>
//
//     <NavLink
//       to="/account"
//       exact
//       style={link}
//       activeStyle={{
//         color: 'white'
//       }}
//     >My Account</NavLink>
//
//     <NavLink
//       to="/boxes"
//       exact
//       style={link}
//       activeStyle={{
//         color: 'white'
//       }}
//     >My Box</NavLink>
//
//     <NavLink
//       to="/games"
//       exact
//       style={link}
//       activeStyle={{
//         color: 'white'
//       }}
//     >Games</NavLink>
//
//   </div>;

export default NavBar

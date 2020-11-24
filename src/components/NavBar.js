import {NavLink} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'orange',
  textDecoration: 'none',
  color: 'black',
}


const NavBar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      style={link}
      activeStyle={{
        color: 'white'
      }}
    >Home</NavLink>

    <NavLink
      to="/quiz"
      exact
      style={link}
      activeStyle={{
        color: 'white'
      }}
    >Quiz</NavLink>

    <NavLink
      to="/account"
      exact
      style={link}
      activeStyle={{
        color: 'white'
      }}
    >My Account</NavLink>

    <NavLink
      to="/boxes"
      exact
      style={link}
      activeStyle={{
        color: 'white'
      }}
    >My Box</NavLink>

    <NavLink
      to="/games"
      exact
      style={link}
      activeStyle={{
        color: 'white'
      }}
    >Games</NavLink>

  </div>;

export default NavBar

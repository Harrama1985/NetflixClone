import React from 'react';
import Header from '../components/header';
import logo from '../logo.svg';
function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to="/" src={logo} alt="Netflix" />
        <Header.Button to="/signin">Signin</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer;

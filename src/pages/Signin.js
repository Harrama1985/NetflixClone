import React from 'react';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import Form from '../components/form';
function Signin() {
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          <Form.Base>
            <Form.Input placeholder="Email Address" type="email" />
            <Form.Input placeholder="Password" type="password" />
            <Form.Submit>Signin</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signin;

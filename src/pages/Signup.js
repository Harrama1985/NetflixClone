import React, { useContext, useState } from 'react';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import Form from '../components/form';
import { FirebaseContext } from '../context/Firebase';
import {  withRouter } from 'react-router-dom';

function Signup(props) {
  const { firebase } = useContext(FirebaseContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = name === '' || email === '' || password === '';
  const handleSignup = (event) => {
    event.preventDefault();
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: name,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        props.history.push('/browser')
      })
      .catch((err) => {
        setEmail('');
        setPassword('');
        setError(err.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="User name"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Signup
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user ? <Form.Link to="/signin">Sign in now.</Form.Link>
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

export default withRouter(Signup);

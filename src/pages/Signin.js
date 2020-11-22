import React, { useContext, useState } from 'react';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import Form from '../components/form';
import { FirebaseContext } from '../context/Firebase';
import { withRouter } from 'react-router-dom'; //hadi ila brit nekhdem bil hooks

function Signin(props) {
  const { firebase } = useContext(FirebaseContext);
  //const {history}= useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = email === '' || password === '';
  const handleSignin = (event) => {
    event.preventDefault();
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.history.push('/browser');
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
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
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
              Signin
            </Form.Submit>
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

export default withRouter(Signin);

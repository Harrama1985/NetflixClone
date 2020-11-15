import React from 'react';
import HeaderContainer from '../containers/Header';
import AccordionContainer from '../containers/Accordion'
import FooterContainer from '../containers/Footer'
import JumbotronContainer from '../containers/Jumbotron'
import OptForm from '../components/opt-form';
import Feature from '../components/feature'
function home() {
  return (
    <>
      <HeaderContainer >
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Let's Start</OptForm.Button>
        </OptForm>
      </Feature>
        </HeaderContainer> 
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}

export default home;

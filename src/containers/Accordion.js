import React from 'react';
import Accordion from '../components/accordion';
import OptForm from '../components/opt-form';
import faqs from '../fixtures/faqs.json';
function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqs.map((item) => {
          console.log(item);
        return (
          <Accordion.Item key={item.id}>
            <Accordion.Header>
              <p>{item.header}</p>
            </Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
      <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        <OptForm.Input placeholder = 'Email address'/>
        <OptForm.Button >Let's Start</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}

export default AccordionContainer;

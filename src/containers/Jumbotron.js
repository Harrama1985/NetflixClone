import React from 'react';
import JumbotronList from '../fixtures/jumbo.json';
import Jumbotron from '../components/jumbotron';
function JumbotronContainer() {
  return (
    <div>
      <Jumbotron.Container>
        {JumbotronList.map((item) => {
          return (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    </div>
  );
}

export default JumbotronContainer;

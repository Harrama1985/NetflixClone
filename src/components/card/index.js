import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Entities,
  Item,
  Image,
  FeatureText,
  FeatureClose,
  Feature,
  FeatureTitle,
  Maturity,
  Content,
} from './styles/card';

const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showCard, setShowCard] = useState(false);
  const [itemCard, setItemCard] = useState({});
  return (
    <FeatureContext.Provider
      value={{ showCard, setShowCard, itemCard, setItemCard }}
    >
      <Container {...restProps}> {children}</Container>
    </FeatureContext.Provider>
  );
}
Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};
Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};
Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowCard, setItemCard } = useContext(FeatureContext);
  return (
    <Item
      {...restProps}
      onClick={() => {
        setItemCard(item);
        setShowCard(true);
      }}
    >
      {children}
    </Item>
  );
};
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showCard, setShowCard, itemCard } = useContext(FeatureContext);
  return showCard ? (
    <Feature
      {...restProps}
      src={`images/${category}/${itemCard.genre}/${itemCard.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemCard.title}</FeatureTitle>
        <FeatureText>{itemCard.description}</FeatureText>
        <FeatureClose onClick={() => setShowCard(false)}>
          <img src="/images/icons/close.png" alt="close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemCard.maturity}>
            {itemCard.maturity < 12 ? 'PG' : itemCard.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemCard.genre.charAt(0).toUpperCase() + itemCard.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
     
    </Feature>
  ) : null;
};

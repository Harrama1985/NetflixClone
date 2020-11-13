import React from 'react';
import {
  Container,
  Title,
  Link,
  Row,
  Column,
  Text
} from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    );
  }
  
  Footer.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>;
  };
  Footer.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>;
  };
  Footer.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>;
  };
  Footer.Link = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>;
  };
  Footer.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>;
  };
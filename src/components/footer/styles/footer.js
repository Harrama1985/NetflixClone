import styled from 'styled-components/macro';
export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1100px;
  flex-direction: column;
`;
export const Title = styled.h4`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
  :hover{
      text-decoration:underline;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Text = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 40px 0;
`;

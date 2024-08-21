// src/components/Card.js
import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #777;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;

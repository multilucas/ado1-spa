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
  cursor: pointer;
  transition: all 0.2s;
  transform: ${({ expanded }) => (expanded ? 'scale(1.1)' : 'scale(1)')};
  background-color: ${({ expanded }) => (expanded ? '#f0f0f0' : '#fff')};
  position: relative;
  z-index: ${({ expanded }) => (expanded ? '10' : '1')};
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #777;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

const ExpandedInfo = styled.div`
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  margin-top: 20px;
`;

const Card = ({ product, expanded, onProductClick }) => {
  return (
    <CardContainer expanded={expanded} onClick={(e) => {
      e.stopPropagation(); // Impede o clique de se propagar para o container pai
      onProductClick(product.id);
    }}>
      <Image src={product.imageUrl} alt={product.title} />
      <CardTitle>{product.title}</CardTitle>
      <CardDescription expanded={expanded}>{product.description}</CardDescription>
      {expanded && (
        <ExpandedInfo expanded={expanded}>
          <p>Informações adicionais sobre o {product.title}</p>
          {/* Adicione mais detalhes do produto aqui */}
        </ExpandedInfo>
      )}
    </CardContainer>
  );
};

export default Card;

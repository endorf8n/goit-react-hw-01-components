import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(90)};
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing(5)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
`;

export const StatsList = styled.ul`
  display: flex;
`;

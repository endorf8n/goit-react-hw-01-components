import styled from 'styled-components';

export const StyledTransaction = styled.tr`
  background-color: ${({ index }) => (index % 2 ? 'lightgray' : 'white')};
  border: 2px solid ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

export const TransactionType = styled.td`
  text-transform: capitalize;
  padding: ${({ theme }) => theme.spacing(4)};
  border: 2px solid ${({ theme }) => theme.colors.light};
`;

export const TransactionAmount = styled.td`
  padding: ${({ theme }) => theme.spacing(4)};
  border: 2px solid ${({ theme }) => theme.colors.light};
`;

export const TransactionCurrency = styled.td`
  padding: ${({ theme }) => theme.spacing(4)};
  border: 2px solid ${({ theme }) => theme.colors.light};
`;

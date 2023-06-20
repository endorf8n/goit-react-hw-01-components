import styled from 'styled-components';

export const TransactionContainer = styled.table`
  table-layout: fixed;
  width: ${({ theme }) => theme.spacing(200)};
  border-collapse: collapse;
  border: 3px solid ${({ theme }) => theme.colors.violet};
  margin-left: auto;
  margin-right: auto;
`;

export const TitleHead = styled.th`
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.blue};
  border: 2px solid ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;

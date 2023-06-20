import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};
`;

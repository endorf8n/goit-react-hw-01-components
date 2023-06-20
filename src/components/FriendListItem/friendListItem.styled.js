import styled from 'styled-components';

export const Item = styled.li`
  width: ${({ theme }) => theme.spacing(75)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(2)};
`;

export const Status = styled.span`
  display: block;
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: ${({ theme }) => theme.spacing(16)};
  height: ${({ theme }) => theme.spacing(16)};
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

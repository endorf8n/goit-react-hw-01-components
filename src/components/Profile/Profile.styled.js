import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(80)};
  margin: 20px auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.light};
  overflow: hidden;
`;

export const UserDescr = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(15)};
`;

export const Avatar = styled.img`
  width: ${({ theme }) => theme.spacing(30)};
  height: ${({ theme }) => theme.spacing(30)};
  background-color: ${({ theme }) => theme.colors.blue};
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Tag = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray};
`;

export const Location = styled.p`
  font-size: ${({ theme }) => theme.spacing(4)};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray};
`;

export const List = styled.ul`
  display: flex;
  width: ${({ theme }) => theme.spacing(80)};
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const ListItem = styled.li`
  width: ${({ theme }) => theme.spacing(27)};
  padding-top: ${({ theme }) => theme.spacing(7)};
  padding-bottom: ${({ theme }) => theme.spacing(7)};
  box-shadow: inset 0 0 10px ${({ theme }) => theme.colors.gray};
`;

export const Label = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.spacing(3)};
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
`;
export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.violet};
`;

import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(18)};
  background-color: #${props => props.bgColor};
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Label = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.spacing(3)};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Percentage = styled.span`
  display: block;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

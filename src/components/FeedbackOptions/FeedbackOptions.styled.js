import styled from '@emotion/styled';

export const ListOfButtons = styled.ul`
  display: flex;
  column-gap: 5px;

  margin-bottom: 20px;
`;

export const Item = styled.li``;

export const Button = styled.button`
  font-size: 14px;

  width: 70px;
  height: 30px;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: #f5f3f0;
  }
`;
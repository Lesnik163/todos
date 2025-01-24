import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  box-sizing: border-box;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 200;
  color: grey;
  background-color: inherit;
  cursor: pointer;
  transition: background-color 1s ease;
  transition: color 1s ease;
  &:hover {
    outline: 2px solid #9b4d03ed;
    background-color:rgba(237, 224, 212, 0.93);
    color:rgba(35, 17, 1, 0.93);
  };
  &:focus {
    outline: 2px solid #391c01ec;
    outline: 2px solidrgba(103, 51, 2, 0.93);
    background-color:rgba(205, 186, 169, 0.93);
  } 
`; 
import styled from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-grow: 1;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 2px solid #e4dfdf;
    border-radius: 50%;
    margin: 0 20px 0 10px;
    transition: background-color 1s ease;
  };
  &:hover::before {
    border-color:rgb(148, 189, 161); 
  };
  &:focus-within::before {
    border-color: rgb(148, 189, 161);
  };
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    margin: 0 20px 0 10px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="%2343A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    display: none;
  };

  input[type="checkbox"]:checked + span {
    position: relative;
  };

  input[type="checkbox"]:checked + span::after {
    display: block;
    content: '';
    position: absolute;
    left: -55px;
    top: 2px;
    scale: 0.8;
    width: 40px;
    height: 40px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="%2343A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
  };
`;

export const StyledInput = styled.input`
  margin-left: 64px;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledSpan = styled.span<{ $checked: boolean }>`
  text-decoration: ${props => props.$checked ? 'line-through' : 'none'};
  color: grey;
`;
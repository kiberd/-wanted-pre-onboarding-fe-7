import styled from "styled-components";

export const DefaultButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  cursor: ${props => props.disabled ? null : "pointer"};
  :hover{
    background-color: ${props => props.disabled ? null : "slategray"};
  }
`;
import styled from '@emotion/styled';

export const Form = styled.form`
  width: 450px;
  align-items: flex-end;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 10px;
  line-height: 0.5;
`;

export const Label = styled.label`
  display: flex;
  width: 350px;
  gap: 5px;
  line-height: 0;
`;

export const Button = styled.button`
  background-color: #2ae575;
  color: #000;
  padding: 5px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #000;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #12f4f4;
    color: #0a0dcf;
  }
`;

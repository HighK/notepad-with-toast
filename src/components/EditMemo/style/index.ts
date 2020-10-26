import styled from 'styled-components'

export const ButtonWrapper  = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;


  > button:first-child {
    margin-left: 20px;
  }
`
export const TitleInput = styled.input`
  width: 80%;
  margin: 0 20px;
  font-size: 24px;
  font-weight: 700;
  border: none;
  border-bottom: 1px solid black;
  height: 40px;

  &:focus {
    outline: none;
  }
`
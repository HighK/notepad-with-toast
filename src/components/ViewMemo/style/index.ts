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

export const ViewContents = styled.div`
  height: 600px;
  padding: 20px;
  > input {
    width: 100%;
    border: none;
    border-bottom: 1x solid black;
  }
`


import styled from 'styled-components'

export const ButtonWrapper  = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;


  > button {
    background: #eee;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 16px;
    &:first-child {
    margin-left: 20px;
  }
  }

  .deleteBtn {
    background: #ff7070;
    color: white;
  }
`

export const ViewContents = styled.div`
  height: 600px;
  padding: 20px;
`


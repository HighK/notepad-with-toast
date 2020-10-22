import styled from 'styled-components'


export interface Props {
  colors?: {
    bg?: string;
    font?: string;
  }
}
export const Button = styled.button<Props>`
  background: ${({colors}) =>  colors?.bg || '#EEE' };
  color: ${({colors}) =>  colors?.font || 'black' };
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 16px;
`
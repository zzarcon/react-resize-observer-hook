import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    font-family: Helvetica;
    background-color: #D8D1F5;
  }

  * {
    box-sizing: content-box;
  }

  h1 {
    text-align: center;
  }
`;

export const AppWrapper = styled.div`

`;

export const Parent = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid;
  resize: both;
  overflow: auto;
  padding: 5px;
  min-height: 20px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;
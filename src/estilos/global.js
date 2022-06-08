import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;


}

button{
    cursor:pointer;
    
}

ul, ol, li{
    list-style: none;
}

body{
    background-color: #cecece;
}
`;

export const Container = styled.div`
display: flex;
background-color: #fff;
width: 100%;
margin: 0 auto;
max-width: ${(props) => props.containerWidth}
padding: 1rem;
text-align: center;
align-items:center;
justify-content: space-around;

`;

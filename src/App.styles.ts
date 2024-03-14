import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url("./images/LS.jpg");
        background-size: cover;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: left;
    }

    * {
        font-family: 'Catamaran', sans-serif;
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }
    
    .questionWrapper{
        display:flex;
        flex-direction: column;
        
    }


    .answerOptions {
        margin: 8px;
        display: inline-block;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: 4px solid #3db7b1;
        color: #3db7b1;
        background-color: #ffffff;
        border-radius: 10px;
    }

    .button:hover, .start:hover {
        color: #3db3b7;
        background-color: #007bff;
    }

    .score {
        color: #3db7b1;
        font-size: 2rem;
        margin: 0;
    }

    .button, .start, .score {
        display: inline-block;
        padding: 20px 40px;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: 4px solid #3db7b1;
        color: #3db7b1;
        background-color: #ffffff;
        border-radius: 10px;
        transition: all 0.3s ease;
    }

    .button:hover {
        color: #3db3b7;
        background-color: #007bff;
    }

    .button:focus,
    .button:active {
        outline: none;
        border-color: #0056b3;
    }

    h1 {
        font-family: Fascinate Inline;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next, .score, .number {
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
    .questions {
        margin: 8px;
        display: inline-block;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        color: #3db7b1;
        background-color: #ffffff;
        border-radius: 10px;
    }
    
    .number {
        margin: 8px;
        display: inline-block;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        color: #3db7b1;
        background-color: #ffffff;
        border-radius: 10px;
    }

    .start {
        max-width: 200px;
    }
`;
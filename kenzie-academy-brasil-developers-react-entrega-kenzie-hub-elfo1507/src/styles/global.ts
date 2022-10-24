import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --mainColor: #FF577F;
        --mainColorFocus: #FF427F;
        --mainColorNeg: #59323F;

        --grey0: #F8F9FA;
        --grey1: #868E96;
        --grey2: #343B41;
        --grey3: #212529;
        --grey4: #121214;

        --titleSize: 16px;
        --headlineSize: 12px;

        --titleWeight: 700;
        --headlineWeight: 400;


    }

    *{
        border: none;
        margin: 0;
        padding: 0;
        outline: none;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        background-color: transparent;
        font-family: 'Inter', sans-serif;
    }
    select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    }
`;

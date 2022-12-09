import { createTheme } from "@mui/material/styles";
import { Link } from "gatsby";
import styled from "styled-components";

const lightDivider = {
    borderColor: "rgba(255, 255, 255, 0.12)",
};

const themeDark = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

const CleanLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export {lightDivider, themeDark, CleanLink};
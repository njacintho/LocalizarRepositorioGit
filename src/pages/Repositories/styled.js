import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color:  #fff;
`;
export const List = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serify;
`;

export const ListItem = styled.li `
    margin: .5rem 0;
    background: rgb(7, 65, 78);
    color: #fff;
    padding: .5rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    color:#fff;
    text-decoration: none;

`;
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useInput from "../Hooks/useInput";
import Input from "./input";
import { Compass, HeartEmpty, User } from "./Icons";

const Header = styled.header`    
    width: 100%;
    border: 0;
    background-color: white;
    border-bottom: ${props => props.theme.boxBorder};
    border-radius: 0px;
    margin-bottom: 60px;
    display: flex; 
    justify-content: center;
    align-items: center;
    padding: 25px 0px;
`;

const HeaderWrapper = styled.div`
    width:100%;
    max-width:${props => props.theme.maxWidth};
    display: flex;
    justify-content: center;
`;

const HeaderColumn = styled.div`
    width: 33%;
    text-align: center;
    &:first-child {
    margin-right: auto;
    text-align: left;
    }
    &:last-child{
        margin-left: auto;
        text-align: right;
    }    
`;

const SearchInput = styled(Input)`
    background-color:${props => props.theme.bgColor};
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    height: auto;
    text-align: center;
    width: 70%;
    &::placeholder {
        opacity: 0.8;
        font-weight: 200;
    }
`;

const HeaderLink = styled(Link)`
    &:not(:last-child){
        margin-right: 30px;
    }
`;

export default () => {
    const search = useInput("");
    return (
        <Header>
        <HeaderWrapper>
            <HeaderColumn>
                <Link to="/">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                >
                <path d="M19.5 10c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-6.527 4.593c-1.108 1.086-2.275 2.219-3.473 3.407-6.43-6.381-12-11.147-12-15.808 0-6.769 8.852-8.346 12-2.944 3.125-5.362 12-3.848 12 2.944 0 .746-.156 1.496-.423 2.253-1.116-.902-2.534-1.445-4.077-1.445-3.584 0-6.5 2.916-6.5 6.5 0 2.063.97 3.901 2.473 5.093z"/>
                </svg>
                </Link>
            </HeaderColumn>
            <HeaderColumn>
                <form>
                <Input {...search} placeholder="Search"/>
                </form>
            </HeaderColumn>
            <HeaderColumn>
                <HeaderLink to="/explore">
                    <Compass />
                </HeaderLink>
                <HeaderLink to="/notifications">
                    <HeartEmpty />
                </HeaderLink>
                <HeaderLink to="/username">
                    <User />
                </HeaderLink>
            </HeaderColumn>
        </HeaderWrapper>
    </Header>
    )
}
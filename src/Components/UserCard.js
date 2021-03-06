import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FollowButton from "./FollowButton";

const Card = styled.div`
    ${props => props.theme.whiteBox}
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;
//EVatar처럼 Avatar컴포넌트에 클래스네임 주면 확장가능(따로 컨트롤)
const EAvatar = styled(Avatar)` 
    margin-bottom: 15px;
`;

const ELink = styled(Link)`
    color: inherit;
    margin-bottom: 10px;
`;

const UserCard = ({id, username, isFollowing, url, isSelf}) => (
    <Card>
        <EAvatar url={url} size={"md"}/>
        <ELink to={`/${username}`}>
            <FatText text={username} />
        </ELink>
        {!isSelf &&  <FollowButton id={id} isFollowing={isFollowing} />}
    </Card>
);

UserCard.propTypes = {
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    isFollowing:PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    isSelf: PropTypes.bool.isRequired
};

export default UserCard;
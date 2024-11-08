import styled from "styled-components";

export const Container = styled.div`
    height: 80%;
    max-height: 800px;
    min-height: 560px;
    width: 100%;
    border: 1px solid orange;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const TextContainer = styled.div`
    p, span {
        color: #F8E5D7;
        font-size: 28px;
        text-align: right;
        margin: 12px 0;
    }
    p > span:first-child {
        color: #F8BD97;
        font-weight: 700;
    }
`;

export const ProfilePictureConainer = styled.div`
    height: 400px;
    width: 320px;
    background-color: #FAEFEB;
    border: 2px solid #988F88;
`;
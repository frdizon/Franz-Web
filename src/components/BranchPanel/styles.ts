import styled from "styled-components";

export const Container = styled.div`
    height: fit-content;
    width: 100%;
    max-width: 1280px;

    margin: 0 auto;
    border: 1px solid blue;
`;

export const BranchHeader = styled.div`
    display: flex;
    
    align-items: center;
    h1 {
        color: skyblue;
        margin-left: 28px;
    }
`;

export const BranchContentContainer = styled.div`

`;

export const SubBranchContainer = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    padding: 0 24px;
`;

export const SubBranchHeaderDetails = styled.div<{branchColorTheme: string}>`
    height: fit-content;
    position: relative;
    top: 142px;
    left: 75px;

    h1, h2 {
        color: ${({branchColorTheme}) => (branchColorTheme)};
    };
    h3 {
        color: #D5C1B6;
    }
`;
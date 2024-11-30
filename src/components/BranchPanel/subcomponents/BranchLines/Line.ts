import styled from "styled-components";

const Line = styled.div<{branchColorTheme: string}>`
    // height: 100%;
    width: 1px;
    background-color: ${({branchColorTheme}) => (branchColorTheme)};
`;

export default Line;
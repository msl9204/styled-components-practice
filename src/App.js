import React from "react";
import styled from "styled-components";

function App() {
    return (
        <React.Fragment>
            <Button />
            <Button danger />
        </React.Fragment>
    );
}

const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;

    &:active,
    &:focus {
        outline: none;
    }
`;

export default App;

import React from 'react';
import styled from 'styled-components/native';

const Box = styled.View `
    padding:20px;
`;

const Title = styled.Text `
    font-size:17px;
    font-weight:bold;
    margin-bottom:20px;
`;

export default ({refreshFunction, setShowModal}) =>{
    return(
        <Box>
            <Title>Adicionar novo veículo:</Title>
        </Box>
    );
}
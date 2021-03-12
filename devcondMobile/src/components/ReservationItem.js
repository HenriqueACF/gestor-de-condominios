import React from 'react';
import styled from 'styled-components/native';

const Box = styled.TouchableOpacity ``;
const Title = styled.Text ``;

export default ({}) =>{
    return(
        <Box onPress={null}>
            <Title>Titulo</Title>
        </Box>
    )
}
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Box = styled.View ``;

const CoverImage = styled.Image ``;

const InfoArea = styled.View ``;

const Title = styled.Text ``;

const InfoText = styled.Text ``;

const DateText = styled.Text ``;

const ButtonItem = styled.TouchableOpacity ``;

export default({data}) =>{
    return(
        <Box>
            <CoverImage source={{uri:data.cover}} resizeMode="cover"/>
            <InfoArea>
                <Title>{data.title}</Title>
                <InfoText>Horário reservado:</InfoText>
                <DateText>{data.datereserved}</DateText>
            </InfoArea>
            <ButtonItem onPress={null}>
                <Icon name="remove" size={25} color="#FF0000" />
            </ButtonItem>
        </Box>
    )
}
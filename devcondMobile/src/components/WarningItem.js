import React, {useState} from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

const Box = styled.View `
    background-color:#FFF;
    border-width:2px;
    border-color:#E8E9ED;
    border-radius:15px;
    padding:15px;
    margin-bottom:10px;
`;

const Date = styled.Text `
    font-size:14px;
    font-weight:bold;
    color:#9C9DB9;
    margin-bottom:10px;
`;

const Title = styled.Text `
    font-size:15px;
    color:#000;
`;

const StatusArea = styled.View `
    flex-direction:row;
    align-items:center;
    margin:10px 0;
`;

const StatusText = styled.Text `
    font-size:14px;
    color:#9C9DB9;
    margin-left:10px;
`;

const PhotosArea = styled.View `
    flex-direction:row;
`;

const PhotoItem = styled.TouchableOpacity `
    margin-right:10px;
`;

const PhotoImage = styled.Image `
    width:50px;
    height:50px;
    border-radius:10px;
`;

export default({data})=>{


    return(
        <Box >
            <Date>{data.datecreated}</Date>
            <Title>{data.title}</Title>
            <StatusArea>
                <Icon name="inbox" size={24} color="#8B63E7" />
                <StatusText>
                    {data.status === 'IN_REVIEW' && 'Ocorrência em análise'} 
                    {data.status === 'RESOLVED' && 'Ocorrência resolvida'} 
                </StatusText>
            </StatusArea>

            {data.photos.length > 0 && 
                <PhotosArea>
                    {data.photos.map((item, index)=>(
                        <PhotoItem key={index} onPress={null}>
                            <PhotoImage source={{uri:item}} resizeMode="cover" />
                        </PhotoItem>
                    ))}
                </PhotosArea>
            }
        </Box>
    );
}
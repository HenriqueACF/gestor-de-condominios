import React, {useState} from 'react';
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';

const Box = styled.View `
    padding:20px;
`;

const Title = styled.Text `
    font-size:18px;
    font-weight:bold;
    margin-bottom:20px;
`;

const Label = styled.Text `
    font-size:16px;
    color:#000;
    margin-bottom:10px;
`;

const Field = styled.TextInput `
    background-color:#FFF;
    border-width:1px;
    border-color:#CCC;
    border-radius:5px;
    color:#000;
    font-size:15px;
    padding:10px;
    margin-bottom:15px;
`;

const ButtonArea = styled.View `
    flex-direction:row;
    justify-content:space-around;
    margin-top:20px;
`;

const SaveButton = styled.Button `
    flex:1;
`;

const CancelButton = styled.Button `
    flex:1;
`;

export default ({refreshFunction, setShowModal}) =>{

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());


    const handleAdd = async() =>{

    }

    const handleCancel = () =>{
        setShowModal(false);
    }

    
    return(
        <Box>
            <Title>Adicionar novo morador:</Title>

            <Label>Nome Completo:</Label>
            <Field
                placeholder="Digite o nome completo"
                value={name}
                onChangeText={t=>setName(t)}
            />

        <Label>Data de Nascimento:</Label>
            <DatePicker
                mode="date"
                date={date}
                onDateChange={setDate}
                locale="pt-BR"
            />

            <ButtonArea>
                <SaveButton title="Adicionar" onPress={handleAdd}/>
                <CancelButton color='#FF0000' title='Cancelar' onPress={handleCancel} />
            </ButtonArea>
        </Box>
    );
}
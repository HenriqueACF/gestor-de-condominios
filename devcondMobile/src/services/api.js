import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://api.b7web.com.br/devcond/api';

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;

    switch(method) {
        case 'get':
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;
        break;
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params);
        break;
    }

    let headers = {'Content-Type': 'application/json'};
    if(token) {
        headers.Authorization = `Bearer ${token}`;
    }

    let req = await fetch(fullUrl, { method, headers, body });
    let json = await req.json();
    return json;
}

//Requisições
export default{
    //Pegar Token
     getToken: async () =>{
         return await AsyncStorage.getItem('token');
     },

     //Validação de Token
     validateToken: async ()=>{
        let token = await AsyncStorage.getItem('token');
        let json = await request('post', '/auth/validate', {}, token);
        return json;
     },

     //Login
     login: async(cpf, password)=>{
        let json = await request('post', '/auth/login', {cpf, password});
        return json;
     },

     //Logout
     logout:async() =>{
         let token = await AsyncStorage.getItem('token');
         let json = await request('post', '/auth/logout', {}, token);
         await AsyncStorage.removeItem('token');
         await AsyncStorage.removeItem('property');
         return json;
     },

     //Register
     register: async(name, email, cpf, password, password_confirm) =>{
        let json = await request('post', '/auth/register', {
            name, email, cpf, password, password_confirm
        });
        return json;
     },

     //pegar avisos
     getWall: async ()=>{
         let token = await AsyncStorage.getItem('token');
         let json = await request('get', '/walls', {}, token);
         return json;
     },

     //like no muro de avisos
     likeWallPost: async (id)=>{
         let token = await AsyncStorage.getItem('token');
         let json = await request('post', `/wall/${id}/like`, {}, token);
         return json;
     },

     //pegar documentos
     getDocs: async () =>{
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', '/docs', {}, token);
        return json;
     },

     //pegar boletos
     getBillets: async () =>{
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property)
        let json = await request('get', '/billets', {
            property: property.id
        }, token);
        return json;
     },

     //pegar ocorrências
     getWarnings: async () =>{
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property)
        let json = await request('get', '/warnings', {
            property: property.id
        }, token);
        return json;
     },

     //adiciona arquivos na tela de ocorrências
     addWarningFile: async(file) =>{
        let token = await AsyncStorage.getItem('token');
        let formData = new FormData();
        formData.append('photo', {
            uri:file.uri,
            type:file.type,
            name:file.fileName
        });
        let req = await fetch(`${baseUrl}/warning/file`, {
            method:'POST',
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body:formData
        });
        let json = await req.json();
        return json;
     },

     //adicionar ocorrência
     addWarning: async (title, list) =>{
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('post', '/warning', {
            title, 
            list,
            property:property.id
        }, token);
        return json;
     },

     //Pega as reservas
     getReservations: async() =>{
         let token = await AsyncStorage.getItem('token');
         let json = await request('get', '/reservations', {}, token);
         return json;
     },

     //dias desabilitados
     getDisabledDates: async (id) => {
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/reservation/${id}/disableddates`, {}, token);
        return json;
    },

     //Pega datas no calendario
     getReservationTimes: async (id, date) =>{
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/reservation/${id}/times`, {date}, token);
        return json;
     },

     //Definindo a reserva escolhida
     setReservation: async (id, date, time)=>{
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('post', `/reservation/${id}`, {
            property:property.id,
            date,
            time
        }, token);
        return json;
     },

     //Pegando minhas reservas feitas
     getMyReservations: async() =>{
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('get', '/myreservations', {
            property: property.id
        }, token);
        return json;
     },

     //Removendo a reserva
     removeReservation: async(id) =>{
         let token = await AsyncStorage.getItem('token');
         let json = await request('delete', `/myreservations/${id}`, {}, token);
         return json;
     },

     //Pegando itens de Achados e perdidos
     getFoundAndLost: async() =>{
        let token = await AsyncStorage.getItem('token');
        let json = await request('get', `/foundandlost`, {}, token);
        return json;
     },

     //Definindo que aqele pertence é meu
     setRecovered: async (id) =>{
        let token = await AsyncStorage.getItem('token');
        let json = await request('put', `/foundandlost/${id}`, {
            status:'recovered'
        }, token);
        return json;
     },

     //Adicionando item perdido
     addLostItem: async (photo, description, where) => {
        let token = await AsyncStorage.getItem('token');
        let formData = new FormData();
        formData.append('description', description);
        formData.append('where', where);
        formData.append('photo', {
            uri: photo.uri,
            type: photo.type,
            name: photo.fileName
        });
        let req = await fetch(`${baseUrl}/foundandlost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        let json = await req.json();
        return json;
     },

     //Pegando informações da unidade
     getUnitInfo: async () =>{
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('get', `/unit/${property.id}`, {}, token);
        return json;
     },

     //Remove qualquer item da unidade(Morador, Veículos e Pets)
     removeUnitItem: async(type, id) =>{
         let token = await AsyncStorage.getItem('token');
         let property = await AsyncStorage.getItem('property');
         property = JSON.parse(property);
         let json = await request('post', `/unit/${property.id}/remove${type}`, {
             id
         }, token);
         return json;
     },

     //Adiciona item há unidade
     addUnitItem: async (type, body)=>{
        let token = await AsyncStorage.getItem('token');
        let property = await AsyncStorage.getItem('property');
        property = JSON.parse(property);
        let json = await request('post', `/unit/${property.id}/add${type}`, body, token);
        return json;
     },

};
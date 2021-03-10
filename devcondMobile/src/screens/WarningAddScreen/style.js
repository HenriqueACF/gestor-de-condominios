import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,

    Scroller: styled.ScrollView `
        flex:1;
        padding:20px;
    `,

    Title: styled.Text `
        font-size:17px;
        color:#000;
        margin:10px 0;
    `,

    Field: styled.TextInput `
        border-width:1px;
        border-color:#CCC;
        background-color:#FFF;
        border-radius:5px;
        color:#000;
        font-size:15px;
        padding:10px;
    `,

    PhotoArea: styled.View `
        margin-bottom:20px;
    `,

    PhotoScroll: styled.ScrollView `
        flex:1;
    `,

    PhotoAddButton: styled.TouchableOpacity `
        width:65px;
        height:65px;
        justify-content:center;
        align-items:center;
        border-width:1px;
        border-color:#CCC;
        border-radius:5px;
    `,

    PhotoItem: styled.View `
        width:65px;
        border-width:1px;
        border-color:#CCC;
        border-radius:5px;
        padding-bottom:5px;
        margin-left:5px;
        align-items:center;
    `,

    Photo: styled.Image `
        width:63px;
        height:63px;
        margin-bottom:5px;
        border-radius:5px;
    `,

    PhotoRemoveButton: styled.TouchableOpacity `

    `,

    ButtonArea: styled.TouchableOpacity `
        background-color:#8863E6;
        padding:12px;
        justify-content:center;
        align-items:center;
        border-radius:5px;

    `,

    ButtonText: styled.Text `
        font-size:15px;
        font-weight:bold;
        color:#FFF;
    `,

    LoadingText: styled.Text `
        font-size:15px;
        margin:10px 0;
    `,
};
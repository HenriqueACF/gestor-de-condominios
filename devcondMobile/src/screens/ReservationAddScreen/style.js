import styled from 'styled-components/native';

export default {

    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,
    Scroller:styled.SafeAreaView `
        flex:1;
    `,

    CoverImage: styled.Image `
        height:150px;
    `,

    LoadingIcon: styled.ActivityIndicator`
        margin-top:20px;
    `, 

    CalendarArea: styled.View `
        margin: 20px;
    `,
};
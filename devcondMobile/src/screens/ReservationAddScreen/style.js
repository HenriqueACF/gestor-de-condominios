import styled from 'styled-components/native';

export default {

    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,
    Scroller:styled.ScrollView `
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

    Title: styled.Text `
        color:#000;
        font-size:17px;
        font-weight:bold;
        margin:10px 20px;
    `,

    TimeListArea: styled.View `
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-around;
        margin-bottom:30px;
    `,

    TimeItem: styled.TouchableOpacity `
        border-width:1px;
        border-color:#CCC;
        border-radius:5px;
        margin:5px 20px;
        background-color:${props=>props.active ? '#8863E6':'transparent'};
        padding:10px;
    `,

    TimeItemText: styled.Text `
        color:${props=>props.active ? '#FFF' : '#000'};
        font-size:14px;
    `,
};
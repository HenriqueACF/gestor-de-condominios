import { useEffect } from 'react'
import custom from './style'
import api from '../../Services/Api'
import { useNavigation } from '@react-navigation/native'
import { useStateValue } from '../../Contexts/StateContext'

export default ()=>{
    const navigation = useNavigation()

    return(
        <custom.Container>
            <custom.Texto>Tela de Login</custom.Texto>
        </custom.Container>
    )
}

import { useEffect } from 'react'
import custom from './style'
import api from '../../Services/Api'
import { useNavigation } from '@react-navigation/native'
import { useStateValue } from '../../Contexts/StateContext'

export default ()=>{
    const navigation = useNavigation()
    const [context, dispatch] = useStateValue()

    useEffect(()=>{
        const checkLogin = async () =>{
            let token = await api.getToken()
            if(token){
                let result = await api.validateToken()
                if(result.error === ''){
                    dispatch({
                        type:'setUser',
                        payload:{
                            user:result.user
                        }
                    })
                    navigation.reset({
                        index:1,
                        routes:[{name: 'ChoosePropertyScreen'}]
                    })
                }else{
                    alert(result.error)
                    dispatch({
                        type:'setToken',
                        payload: {token:''}
                    })
                    navigation.reset({
                        index:1,
                        routes:[{name: 'LoginScreen'}]
                    })
                }
            }else{
                navigation.reset({
                    index:1,
                    routes:[{name: 'LoginScreen'}]
                })
            }
        }
        checkLogin()
    }, [])

    return(
        <custom.Container>
            <custom.LoadingIcon color='#8863e6' size='large'/>
        </custom.Container>
    )
}

import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import {useNavigation} from "@react-navigation/native";
import api from "../../Service/api";


export function FoundAndLost() {

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [lostList, setLostList] = useState([])
    const [recoveredList, setRecoveredList] = useState([])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Achados e Perdidos',
      headerStyle: {
        backgroundColor: '#f5f6fa',
        shadowOpacity: 0,
        elevation: 0,
      },
    });
  });

    const getFoundAndLost = async() =>{
        setLostList([])
        setRecoveredList([])
        setLoading(true)
        const result = await api.getFoundAndLost()
        setLoading(false)
        if(result.error === ''){
            setLostList(result.lost)
            setRecoveredList(result.recovered)
        }else{
            Alert.alert(result.error)
        }
    }
  return (
    <SafeAreaView style={{padding: 10}}>
      <ScrollView style={styles.scroll}>
          {loading &&
            <ActivityIndicator color='#e8e9ed' size='large'/>
          }
          {!loading && lostList.length === 0 && recoveredList.length === 0 &&
          <View>
              <Text>Não há itens para exibir.</Text>
          </View>
          }
          {!loading && lostList.length > 0 &&
            <>
                <Text>Itens Perdidos</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >

                </ScrollView>
            </>
          }
          {!loading && lostList.length === 0 && recoveredList.length === 0 &&
          <View>
              <Text>Não há itens para exibir.</Text>
          </View>
          }
          {!loading && lostList.length > 0 &&
          <>
          <Text style={styles.title}>Itens Perdidos</Text>
          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >

          </ScrollView>
          </>
          }
          {!loading && recoveredList.length > 0 &&
          <>
          <Text style={styles.title}>Itens Recuperados</Text>
          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >

          </ScrollView>
          </>
          }
      </ScrollView>
    </SafeAreaView>
  );
}

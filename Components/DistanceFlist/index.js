import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
;

const distance = [
    {
        id: '0',
        text1: 'Distance',
        text2: '2,500 Miles'
    },

    {
        id: '1',
        text1: 'Dates',
        text2: 'Show Future Dates'
    },

    {
        id: '2',
        text1: 'Time Starting',
        text2: 'Show All Times'
    },

]


const DistanceFlist = () => {
    const [change, setChange] = useState(null)
    const [changetwo, setChangetwo] = useState(null)
    const navigation = useNavigation()

    return (

        <View style={styles.mainView}>

            <FlatList
                data={distance}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={styles.Txt1}>
                                {item.text1}
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.Txt2}>
                                    {item.text2}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({

    mainView: { marginTop: 20 },
    Txt1: { color: 'white' },
    Txt2: { alignSelf: 'flex-end', fontSize: 15, fontWeight: 'bold', color: 'white' }

  })

export default DistanceFlist;



import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';


const leveltwo = [
    {
        id: "0",
        name: "Show All Events",
    },
    {
        id: "1",
        name: "Community",
    },
    {
        id: "2",
        name: "Charity",
    },
    {
        id: "3",
        name: "Recreational",
    },
    {
        id: "4",
        name: "Fitness",
    },
    {
        id: "5",
        name: "Leisure",
    },
    {
        id: "6",
        name: "Nightlife",
    },
    {
        id: "7",
        name: "Other",
    }
]


const EventsFlist = () => {
    const [change, setChange] = useState(null)
    const [changetwo, setChangetwo] = useState(null)
    const navigation = useNavigation()

    return (

        <View>
            <FlatList
                data={leveltwo}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.mainView}>
                            <TouchableOpacity onPress={() => setChangetwo(index)}>
                                <Text style={styles.Txt1}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>

                            <View style={{ borderRadius: 20, borderWidth: 1, padding: 10, backgroundColor: index === changetwo ? '#14ABBC' : '#dcdcdc' }}>

                            </View>
                        </View>
                    )
                }}

            />
        </View>

    )
}

const styles = StyleSheet.create({

    mainView: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 },
    Txt1: { fontSize: 15, fontWeight: 'bold', color: 'white' }

    

})


export default EventsFlist;



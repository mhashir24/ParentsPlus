import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';


let level = [
    {
        id: "0",
        name: "Public",
    },
    {
        id: "1",
        name: "Friends",
    },
    {
        id: "2",
        name: "Following",
    },
    {
        id: "3",
        name: "My Events & Invites",
    },
    {
        id: "4",
        name: "Events Joined",
    }
]


const PrivacyFlist = () => {
    const [change, setChange] = useState(null)
    const [changetwo, setChangetwo] = useState(null)
    const navigation = useNavigation()

    return (
            <FlatList
                data={level}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.mainView}>
                            <TouchableOpacity onPress={() => setChange(index)}>
                                <Text style={styles.Txt1}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>

                            <View style={{ borderRadius: 20, borderWidth: 1, padding: 10, backgroundColor: index === change ? '#14ABBC' : '#dcdcdc' }}>

                            </View>

                        </View>
                    )
                }}

            />

    )
}


const styles = StyleSheet.create({

    mainView: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 },
    Txt1: { fontSize: 15, fontWeight: 'bold', color: 'white' },
    

})


export default PrivacyFlist;



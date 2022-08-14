import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import PrivacyFlist from '../../Components/PrivacyFlist';
import EventsFlist from '../../Components/EventsFlist';
import DistanceFlist from '../../Components/DistanceFlist';


const FilterEvents = () => {
    const [change, setChange] = useState(null)
    const [changetwo, setChangetwo] = useState(null)
    const navigation = useNavigation()

    return (

        <View style={styles.mainView}>

            <View style={styles.subView}>
                <Text style={styles.Txt1}>
                    {'Filter Events'}
                </Text>
            </View>

            <View>
                <Text style={styles.Txt2}>
                    {'Privacy (Choose One)'}
                </Text>
            </View>

                <PrivacyFlist />

                <DistanceFlist />


            <View style={styles.PreView}>
                <Text style={{color:'white'}}>
                    {'Categories include (Choose One)'}
                </Text>
            </View>

            <View>
                <EventsFlist />
            </View>

            <View style={styles.finalView}>
                <Text style={styles.Txt3}>
                    {'Save Changes'}
                </Text>
            </View>



        </View>

    )
}


const styles = StyleSheet.create({
    mainView: { flex: 1, paddingHorizontal: 10, backgroundColor: 'black' },
    subView: { justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10 },
    Txt1: { fontSize: 17, fontWeight: 'bold', color: 'white' },
    Txt2: { color: 'white' },
    PreView: { marginTop: 20},
    finalView: { justifyContent: 'center', alignItems: 'center', marginTop: 10 },
    Txt3: { fontSize: 17, fontWeight: 'bold', color: 'white' }
  
  })

export default FilterEvents;



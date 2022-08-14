import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';


import { HP, WP } from '../../Components/Constant/index';


const CardHolder = () => {
    const navigation = useNavigation()
    return (

        <View>

            <View style={styles.mainComponentView}>
                <View style={styles.mainSubView}>

                    <Text style={styles.view1Txt1}>
                        {'Card Number'}
                    </Text>
                    <TextInput
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.mainSubView}>

                    <Text style={styles.view1Txt1}>
                        {'Expires'}
                    </Text>
                    <TextInput
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.mainSubView}>

                    <Text style={styles.view1Txt1}>
                        {'CVV'}
                    </Text>
                    <TextInput
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.mainSubView}>

                    <Text style={styles.view1Txt1}>
                        {'Street Address'}
                    </Text>
                    <TextInput
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.viewCity}>

                    <View style={styles.mainSubView}>

                        <Text style={styles.view1Txt1}>
                            {'City'}
                        </Text>
                        <TextInput
                            keyboardType={'default'}
                        />
                    </View>

                    <View style={styles.viewState}>

                        <Text style={styles.view1Txt1}>
                            {'State'}
                        </Text>
                        <TextInput
                            keyboardType={'default'}
                        />
                    </View>

                </View>

                <View style={styles.mainSubView}>

                    <Text style={styles.view1Txt1}>
                        {'Zipcode'}
                    </Text>
                    <TextInput
                        keyboardType={'default'}
                    />
                </View>

            </View>

        </View>

    )
}



const styles = StyleSheet.create({
    mainComponentView: { backgroundColor: 'black', paddingHorizontal: WP('2') },
    mainSubView: { flexDirection: 'row', alignItems: 'center' },
    view1Txt1: { color: '#ffd700', fontSize: 16, marginRight: 15 },
    viewCity:{ flexDirection: 'row' },
    viewState: { flexDirection: 'row', alignItems: 'center', marginLeft: WP('30') }



})

export default CardHolder;



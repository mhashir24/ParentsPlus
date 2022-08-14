import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';

import {HP, WP} from '../../Components/Constant/index';
import CardHolderComponent from '../../Components/CardHolderComponent/index';

const HeaderContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subViewPremium}>
        <Text style={styles.view1Txt1}>
          {'PREMIUM UPGRADE FOR ALL FEATURES'}
        </Text>

        <Text style={styles.view1Txt2}>
          {'Get access to the latest KnockBuddy Features'}
        </Text>

        <Text style={styles.view1Txt3}>
          {'Sun Dial Mapping to Sun Exposure with Multi-arrows'}
        </Text>

        <Text style={styles.view1Txt3}>
          {'AR Solar Panel Camera tool to show panel placement'}
        </Text>
      </View>

      <CardHolderComponent />
    </View>
  );
};

const FooterContent = () => {
  return (
    <View style={styles.sub2View}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonTxt}>
          {'Upgrade to Premium for $9.99/Month'}
        </Text>
      </View>

      <Text style={styles.view2Txt1}>
        {'COMING SOON - PREMIUM ACCESS ONLY'}
      </Text>

      <Text style={styles.view2Txt2}>
        {'Team Communication with group messages'}
      </Text>

      <Text style={styles.view2Txt2}>{'Solar Farm - Digital Leads'}</Text>

      <Text style={styles.view2Txt2}>
        {'D2D Competitions - Prove yourself and win sales'}
      </Text>
    </View>
  );
};

const CardHolder = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <FlatList
        data={[]}
        keyExtractor={() => 'item'}
        contentContainerStyle={{backgroundColor: 'black'}}
        renderItem={() => null}
        ListHeaderComponent={HeaderContent}
        ListFooterComponent={FooterContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: WP('3'),
    backgroundColor: 'black',
  },
  subViewPremium: {
    marginTop: HP('3'),
  },
  view1Txt1: {
    color: '#ffd700',
    fontSize: 17,
    paddingBottom: HP('2'),
  },
  view1Txt2: {
    paddingBottom: HP('2'),
    color: 'white',
  },
  view1Txt3: {
    color: 'white',
  },
  main2View: {
    marginTop: HP('-35'),
    marginBottom: HP('-5'),
  },
  sub2View: {
    backgroundColor: 'black',
    paddingHorizontal: WP('3'),
    alignItems: 'center',
    marginTop: 10,
  },
  buttonView: {
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#ffd700',
  },
  buttonTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  view2Txt1: {
    paddingVertical: HP('2'),
    color: 'white',
  },
  view2Txt2: {
    color: 'white',
  },
});

export default CardHolder;

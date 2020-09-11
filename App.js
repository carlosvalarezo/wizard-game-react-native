/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Avatar, Text, ListItem, Rating, Button  } from "react-native-elements";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import NumericInput from 'react-native-numeric-input'

import { connect } from "react-redux";
import { agregarPocima } from "./src/redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { Pociones } from './src/Pociones';

const listaPociones = [
  {
    color: 'red',
    label: 'Poción roja'
  },
  {
    color: 'blue',
    label: 'Poción azul'
  },
  {
    color: 'green',
    label: 'Poción verde'
  },
  {
    color: '#FFEA00',
    label: 'Poción amarilla'
  },
  {
    color: 'gray',
    label: 'Poción gris'
  }
]



const App: () => React$Node = () => {
  const dispatch = useDispatch();
  const pociones = useSelector(state => state.pocimas)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
              {
                listaPociones.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                    <FontAwesomeIcon icon={faFlask} color={l.color} size="40px" />
                    <ListItem.Content>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: '80%', height: 50 }}>
                          <ListItem.Title style={{color: l.color, fontFamily: 'Arial', marginTop:'7%' }}>{l.label}</ListItem.Title>
                        </View>
                        <View style={{width: '20%', height: 50 }}>
                          <NumericInput type='up-down' rounded totalWidth={50}
                                        totalHeight={40}
                                        iconSize={10}
                                        iconStyle={{ color: l.color }}
                                        onChange={numero => dispatch(agregarPocima({color: l.color, numero }))} />
                        </View>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                ))
              }
              <Button
                title="Calcular ataque"
                onPress={() => console.log(pociones)}
              />
              </View>



        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

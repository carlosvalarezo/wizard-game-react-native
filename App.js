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

import { Avatar, Text  } from "react-native-elements";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          >

            <View flexDirection="row">
              <FontAwesomeIcon icon={faFlask} color="red" size="40px" />
              <Text>tPoción roja</Text>
            </View>

            <View flexDirection="row">
              <FontAwesomeIcon icon={faFlask} color="blue" size="40px" />
              <Text>Poción Azul</Text>
            </View>

            <View flexDirection="row">
              <FontAwesomeIcon icon={faFlask} color="green" size="40px"  />
              <Text>Poción verde</Text>
            </View>

            <View flexDirection="row">
              <FontAwesomeIcon icon={faFlask} color="#FFEA00" size="40px" />
              <Text>Poción amarilla</Text>
            </View>

            <View flexDirection="row">
              <FontAwesomeIcon icon={faFlask} color="gray" size="40px" />
              <Text>Poción gris</Text>
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

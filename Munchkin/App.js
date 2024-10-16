import React, {Component, useState, useEffect} from 'react';
import {Alert, Button, StyleSheet, View, Text} from 'react-native';

export default function App() {
  const [szint,setSzint] = useState(1)
  const [pont, setPont] = useState(1)
  const [kocka, setKocka] = useState(6)
  function novelSzint() {
    if(szint<10){
      setSzint(szint+1)
    }
  }
  function csokkentSzint() {
    if(szint>1){
      setSzint(szint-1)
    }
  }
  function novelPont(){
    if(pont<10) setPont(pont+1)
  }
  function csokkentPont(){
    if(pont>1) setPont(pont-1)
  }
function kockaNovel(){
  if(kocka<10){
    setKocka(kocka+1)
  }
}
function kockaCsokkent(){
  if(kocka>1){
    setKocka(kocka-1)
  }
}
    return (
      <View style={[styles.container,{flexDirection: 'column',},]}>
        <View style={{flex:1}}>
        <View style={[styles.container,{flexDirection: 'row',},]}>
          <View style={{flex: 1}}>
            <Text style={styles.szintCim}>SZINTEK száma:</Text>
            
            <View style={styles.buttonContainer}>
              <Button onPress={novelSzint} title="+" />
            </View>
            
            <Text style={styles.szintSzam}>{szint}</Text>
        
            <View style={styles.buttonContainer}>
              <Button
                onPress={csokkentSzint}
                title="-"/>
            </View>
          </View>
          
          <View style={{flex: 1, backgroundColor: '#C0C0C0'}} >
            <Text style={styles.szintCim}>PONTOK száma:</Text>
            
            <View style={styles.buttonContainer}>
              <Button onPress={novelPont} title="+" />
            </View>
            
            <Text style={styles.szintSzam}>{pont}</Text>
            
            <View style={styles.buttonContainer}>
              <Button
                onPress={csokkentPont}
                title="-"/>
            </View>
          </View>
        </View>
        </View>

        <View style={{flex:1}}>
          <View style={[styles.container2,{flexDirection: 'row',},]}>
            <View style={{flex: 1}}>
              <Text style={styles.kocka}>Kocka oldalszáma:</Text>
              
              <View style={styles.buttonContainer}>
                <Button onPress={kockaNovel} title="+" />
              </View>
              
              <Text style={styles.oldalszam}>{kocka}</Text>
          
              <View style={styles.buttonContainer}>
                <Button
                  onPress={kockaCsokkent}
                  title="-"/>
              </View>
            </View>
          </View>
          
        </View>
        <View style={{flex:0.5, backgroundColor: '#fff'}}>
            <Button title='KOCKADOBÁS'></Button>
            <Text style={{fontSize:20}}>Kockadobás eredménye:</Text>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
  kocka:{
    fontSize: 20
  },
  oldalszam:{
    backgroundColor: 'darkblue',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    marginLeft: 70,
    marginRight: 70
  },
  container2: {
    flex:1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  container: {
    flex:1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#C0C0C0'
  },
  buttonContainer:{
    padding: 20,
    fontSize:20
  },
  szintCim:{
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "darkred",
    color: 'white',
    padding: 20,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20
  },
  szintSzam: {
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "darkred",
    color: 'white',
    padding: 20,
    margin:20
  }
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
 const [display, setDisplay] = useState('0');
 const [operador, setOperador] = useState(null);
 const [firstValue, setFirstValue] = useState(null);

 const handleInput = (input) => {
  if (['+', '-', 'x', '%'].includes(input)) {
    setOperador(input);
    setFirstValue(display);
    setDisplay('0');
  } else if (input === '=') {
    if (operador && firstValue !== null) {
      const a = parseFloat(firstValue);
      const b = parseFloat(display);
      let resut = 0;
      switch (operador) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case 'x': result = a * b; break;
        case '%': result = a === 0 ? 'Erro' : a / b; break;
        default: break;
      }

      setDisplay(String(result));
      setOperador(null);
      setFirstValue(null);
    }
  } else if (input === 'C') {
    setDisplay('0');
    setOperador(null);
    setFirstValue(null);
  } else {
    setDisplay((prev) => (prev === '0' ? input : prev + input));
  }
 };

 const button = ({label}) => (
  <TouchableOpacity style={style.btn} onPress={() => handleInput(label)}>

  </TouchableOpacity>
 );

 return (
  <SafeAreaView style={StyleSheet.container}>
    <View style={StyleSheet.displayArea}>
      <Text style={style.display}>{display}</Text>
    </View>
    <view style={styles.row}>
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="%" />
      </view>
    <view style={styles.row}>
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="x" />
    </view>
      <view style={styles.row}>
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="-" />
    </view>
     <view style={styles.row}>
      <Button label="0" />
      <Button label="C" />
      <Button label="=" />
      <Button label="+" />
    </view>
  </SafeAreaView>
 
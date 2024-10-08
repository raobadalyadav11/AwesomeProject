import React from 'react';
import {
  StyleSheet,
  Text,
  View, useColorScheme
} from 'react-native';
import FlatCard from './components/FlatCard';
import EvalutedCard from './components/EvalutedCard';
import FancyCard from './components/FancyCard';


function App(): React.JSX.Element {
  return (
    <View >
      <FlatCard/>
      <EvalutedCard/>
      <FancyCard/>
    </View>

  )
}

const styles = StyleSheet.create({
  
})

export default App;

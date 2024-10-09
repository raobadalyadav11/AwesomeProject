import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View, useColorScheme
} from 'react-native';
import FlatCard from './components/FlatCard';
import EvalutedCard from './components/EvalutedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';


function App(): React.JSX.Element {
  return (
    <ScrollView>

    <View >
      <FlatCard/>
      <EvalutedCard/>
      <FancyCard/>
      <ActionCard/>
    </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  
})

export default App;

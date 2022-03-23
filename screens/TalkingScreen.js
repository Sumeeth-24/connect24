
import  React, {useState} from 'react';
import { View, StyleSheet, Button, Text, TextInput, SafeAreaView } from 'react-native';
import * as Speech from 'expo-speech';
import CustomisedButton from '../components/CustomisedButton';

const TalkingScreen = props => {
  const [result, setResult] = useState('');


  const speak = () => {
    const greeting = `Hi ${result}`;
   const options = {
      voice: "com.apple.ttsbundle.Ellen-compact",
      pitch: 1.2,
      rate: 0.8
    }
    Speech.speak(greeting, options);
  };

return (
    
    <View style={styles.container}>
          <SafeAreaView>
             <Text style={styles.headingText}>Text Recoginition</Text>
             <View style={styles.textInputStyle}>
              <TextInput
                 value={result}
                 placeholder="Your text"
                 style={{ flex: 1 }}
                 onChangeText={text => setResult(text)}
                 multiline={true}
               />
              
             </View>
             <View style={{marginBottom: 60}}>
                 <Button  title="Start listening" onPress={speak} />
             </View>
           </SafeAreaView>


           <CustomisedButton onPress={() => {
               props.navigation.navigate({routeName: 'Speaking'});
           }}>Go to speak
           </CustomisedButton>

         </View>

         
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  headingText: {
    alignSelf: 'center',
    marginTop: -15 ,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 26
  },
  textInputStyle: {
    fontSize: 26,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    height: 350,
    borderRadius: 5,
    paddingTop: 10,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  }
});

  export default TalkingScreen ;
